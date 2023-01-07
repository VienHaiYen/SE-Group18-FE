import { GET, POST } from '../../modules';
import { useEffect, useState } from 'react';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
function InputGrade() {
    const [classID, setClassID] = useState(0);
    const [classList, setClassList] = useState([]);
    const [classMembers, setClassMembers] = useState([]);
    const [year, setYear] = useState(2223);
    const [term, setTerm] = useState(1);
    const [students, setStudents] = useState([]);

    const [basicModal, setBasicModal] = useState(false);
    const [currentID, setCurrentID] = useState();
    const toggleShow = () => setBasicModal(!basicModal);

    useEffect(() => {
        handleFetchAllStudentInfo();
    }, [classMembers]);
    useEffect(() => {
        if (!basicModal) {
            setCurrentGrade({
                mieng: '',
                _15: '',
                _45: '',
                _gk: '',
                _ck: '',
            });
        } else {
            console.log('ki ta', currentGrade);
        }
    }, [basicModal]);
    useEffect(() => {
        // Load danh sach lop moi lan onMouse
        let nid = handleNId(year, term);
        const handleGetClassList = async () => {
            let data = await GET.fetchClassList(nid);
            data = await fetchClassInfo(data);
            console.log(data);
            setClassList(data);
            console.log('454787sdesdas', classList);
        };
        handleGetClassList();
    }, [term, year]);
    async function fetchClassInfo(userIds) {
        const _class = userIds.map(async (id) => {
            let nid = handleNId(year, term);
            const user = await GET.fetchEachClassInfo(id, nid);
            return user;
        });
        const users = await Promise.all(_class);
        console.log('tu gv lay cac lop: ', users);

        return users;
    }
    const handleNId = (year, term) => {
        let nid = year * 10 + term * 1;
        return nid.toString();
    };

    const handleGetClass = (e) => {
        e.preventDefault();
        let data = classList[classID];
        if (!data) {
            alert('Khong ton tai lop nay');
            return;
        }
        setClassMembers(data.members);
        console.log(456, classMembers);
    };

    async function fetchInfo(userIds) {
        let nid = handleNId(year, term);
        const person = userIds.map(async (id) => {
            const user = await GET.fetchGradeAPerson(id, nid);
            return user;
        });
        const users = await Promise.all(person);
        console.log(users);
        return users;
    }
    const handleFetchAllStudentInfo = async () => {
        let abc = await fetchInfo(classMembers);
        setStudents(abc);
        return abc;
    };

    const [currentGrade, setCurrentGrade] = useState({
        mieng: null,
        _15: null,
        _45: null,
        _gk: null,
        _ck: null,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentGrade((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCloseDialog = () => {
        toggleShow();
    };
    const handleChangePoint = async () => {
        console.log('diem', currentGrade);
        let nid = handleNId(year, term);
        let data = await POST.postGrade(nid, currentID, currentGrade);
        alert(data.message);
        if (data.message === 'successfully updated scores') {
            handleFetchAllStudentInfo();
        }
        toggleShow();
    };
    return (
        <>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>CHỈNH SỬA ĐIỂM - {currentID}</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div className="form-group mr-3">
                                <label htmlFor="inputEmail4">Điểm miệng</label>
                                <input
                                    type="number"
                                    className=" form-control"
                                    id="inputEmail4"
                                    placeholder="Điểm miệng"
                                    value={currentGrade.mieng}
                                    name="mieng"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mr-3">
                                <label htmlFor="inputEmail4">Điểm 15 phút</label>
                                <input
                                    type="number"
                                    className=" form-control"
                                    id="inputEmail4"
                                    placeholder="Điểm 15 phút"
                                    value={currentGrade._15}
                                    name="_15"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mr-3">
                                <label htmlFor="inputEmail4">Điểm 45 phút</label>
                                <input
                                    type="number"
                                    className=" form-control"
                                    id="inputEmail4"
                                    placeholder="Điểm 45 phút"
                                    value={currentGrade._45}
                                    name="_45"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mr-3">
                                <label htmlFor="inputEmail4">Điểm Giữa học kì</label>
                                <input
                                    type="number"
                                    className=" form-control"
                                    id="inputEmail4"
                                    placeholder="Điểm Giữa học kì"
                                    value={currentGrade._gk}
                                    name="_gk"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mr-3">
                                <label htmlFor="inputEmail4">Điểm Cuối học kì</label>
                                <input
                                    type="number"
                                    className=" form-control"
                                    id="inputEmail4"
                                    placeholder="Mã số học sinh"
                                    value={currentGrade._ck}
                                    name="_ck"
                                    onChange={handleChange}
                                />
                            </div>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <button type="button" class="btn btn-outline-secondary" onClick={handleCloseDialog}>
                                Đóng
                            </button>
                            <button type="button" class="btn btn-outline-danger" onClick={handleChangePoint}>
                                Đồng ý
                            </button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <form>
                <h2>Nhập điểm số học sinh</h2>
                <div className="form-row align-items-end">
                    <div className="form-group mr-3">
                        <label>Tên lớp</label>
                        <select id="yearID" className="form-control" onChange={(e) => setClassID(e.target.value)}>
                            <option defaultValue disabled>
                                --Ten lop--
                            </option>
                            {classList &&
                                classList.map((cid, index) => {
                                    return <option value={index}>{cid.className}</option>;
                                })}
                        </select>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="yearID">Năm học</label>
                        <select id="yearID" className="form-control" onChange={(e) => setYear(e.target.value)}>
                            <option defaultValue disabled>
                                --Năm học--
                            </option>
                            <option value={2223}>2022-2023</option>
                            <option value={2122}>2021-2022</option>
                        </select>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="termID">Học kì</label>
                        <select id="termID" className="form-control" onChange={(e) => setTerm(e.target.value)}>
                            <option defaultValue disabled>
                                --Học kì--
                            </option>
                            <option value={1}>Học kì 1</option>
                            <option value={2}>Học kì 2</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-secondary"
                        style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
                        onClick={handleGetClass}
                    >
                        Tra cứu
                    </button>
                </div>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">MSHS</th>
                        <th scope="col">Kiểm tra miệng</th>
                        <th scope="col">Kiểm tra 15'</th>
                        <th scope="col">Kiểm tra 45'</th>
                        <th scope="col">Giữa kì</th>
                        <th scope="col">Cuối kì</th>
                        <th scope="col">Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {students &&
                        students.map((grade, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{classMembers[index]}</td>
                                {grade === null && (
                                    <>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </>
                                )}
                                {grade !== null && (
                                    <>
                                        <td>{grade.point.mieng}</td>
                                        <td>{grade.point._15}</td>
                                        <td>{grade.point._45}</td>
                                        <td>{grade.point._gk}</td>
                                        <td>{grade.point._ck}</td>
                                    </>
                                )}
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-outline-primary"
                                        onClick={() => {
                                            setCurrentID(classMembers[index]);
                                            if (grade !== null) {
                                                setCurrentGrade(grade.point);
                                            }
                                            setBasicModal(true);
                                        }}
                                    >
                                        Chỉnh sửa
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
}

export default InputGrade;
