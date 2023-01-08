import { useState, useEffect } from 'react';
import { GET } from '../../modules';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
function TeacherList() {
    const [id, setId] = useState('');
    const [teachers, setTeacher] = useState([]);
    const [teacherFinding, setTeacherFinding] = useState([]);
    const [currentID, setCurrentID] = useState();
    const [currentClasses, setCurrentClasses] = useState();
    const [classList, setClassList] = useState([]);

    const [aa, setAa] = useState();

    const [deleteID, setDeleteID] = useState();
    const [addID, setAddID] = useState();

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    useEffect(() => {
        const handleFetchAllTeacherInfo = async () => {
            let data = await GET.fetchTeacher();
            setTeacher(data);
            console.log('teacher', data);
            setTeacherFinding(data);
        };
        handleFetchAllTeacherInfo();
        handleGetClassList();
    }, []);
    useEffect(() => {
        console.log(deleteID, addID);
    }, [deleteID, addID]);
    useEffect(() => {
        if (!basicModal) {
            setCurrentClasses(null);
            setAa(null);
        }
    }, [basicModal]);
    const handleGetClassList = async () => {
        let nid = 22231;
        // alert(nid);
        let data = await GET.fetchClassList(nid);
        await setClassList(data);
        console.log('ds cac lop', classList);
        return;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === '') {
            setTeacherFinding(teachers);
            return;
        }
        setTeacherFinding((tokenArray) => []);
        teachers.forEach((teacher, index) => {
            if (teacher.id === id) {
                setTeacherFinding((teacherFinding) => [...teacherFinding, teacher]);
            }
        });
    };
    const fetchClassOfTeacher = async (id) => {
        let nid = 22231;
        let res = await fetch(`http://localhost:55000/api/teacher-schedule?nid=${nid}&id=${id}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'GET',
        });

        let data = await res.json();
        // console.log(123, data);
        if (data) {
            return data;
        } else {
            alert('Loi khong tai duoc danh sach giao vien');
            return [];
        }
    };

    const assignClass = async (id, _class) => {
        let nid = 22231;
        let res = await fetch(`http://localhost:55000/api/assign-class-to-teacher`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'POST',
            body: JSON.stringify({
                nid: nid,
                id: id,
                _class: _class,
            }),
        });

        let data = await res.json();
        alert(data.message);
        if (data) {
            return data;
        } else {
            alert('Loi khong them lop cho gv duoc');
            return [];
        }
    };
    const handleAssignClass = async () => {
        let data = await assignClass(currentID, addID);
        setAddID('');
        handleChange();
        return data;
    };

    const removeClass = async (id, _class) => {
        let nid = 22231;
        console.log('testing:', id, 'class:', _class);
        let res = await fetch(`http://localhost:55000/api/remove-teacher-from-class`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'POST',
            body: JSON.stringify({
                nid: nid,
                id: id,
                _class: _class,
            }),
        });

        let data = await res.json();
        // console.log(123, data);
        if (data) {
            return data;
        } else {
            alert('Loi khong xoa lop cho gv duoc');
            return [];
        }
    };
    const handleRemoveClass = async () => {
        let data = await removeClass(currentID, deleteID);
        alert(data.message);
        setAddID('');
        handleChange();
    };
    useEffect(() => {
        handleChange();
        if (classList && currentClasses) {
            let data = classList.map((curr) => {
                if (!currentClasses.includes(curr.id)) {
                    return curr;
                    // <option value={curr.id}>{convertIdToClassname(curr.id)}</option>
                }
            }, []);
            setAa(data);
        }
        if (classList && !classList) {
            setAa(classList);
        }
    }, [currentID]);

    const handleChange = async () => {
        let data = await fetchClassOfTeacher(currentID);
        let data1 = await data._class;
        setCurrentClasses(data1);
        console.log('class of: ', data._class);
    };
    const convertIdToClassname = (id) => {
        return id.substring(1, 3) + 'a' + id.substring(3);
    };
    const handleClose = () => {
        toggleShow();
    };
    return (
        <>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Thay đổi {currentID}</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            Lớp đang dạy hiện tại
                            <div className="d-flex">
                                <select
                                    className="form-control"
                                    onChange={(e) => setDeleteID(e.target.value)}
                                    style={{ width: '100px', marginRight: '20px' }}
                                    // value={info._class}
                                >
                                    <option value="" defaultValue style={{ display: 'none' }}></option>
                                    {currentClasses &&
                                        currentClasses.map((cid, index) => {
                                            return <option value={cid}>{convertIdToClassname(cid)}</option>;
                                        })}
                                </select>
                                <button className="btn btn-danger" onClick={handleRemoveClass}>
                                    XÓA
                                </button>
                            </div>
                            Thêm lớp
                            <div className="d-flex">
                                <select
                                    className="form-control"
                                    onChange={(e) => setAddID(e.target.value)}
                                    style={{ width: '100px', marginRight: '20px' }}
                                >
                                    <option value="" defaultValue style={{ display: 'none' }}></option>
                                    {currentClasses &&
                                        classList &&
                                        classList.map((_class, index) => {
                                            if (!currentClasses.includes(_class.id)) {
                                                return (
                                                    <option value={_class.id}>{convertIdToClassname(_class.id)}</option>
                                                );
                                            }
                                        })}
                                </select>
                                <button className="btn btn-dark" onClick={handleAssignClass}>
                                    THÊM
                                </button>
                            </div>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <button type="button" className="btn btn-outline-secondary" onClick={handleClose}>
                                Đóng
                            </button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <form>
                <h2>Danh sách Giáo viên </h2>
                <div className="form-row align-items-end">
                    <div className="form-group mr-3">
                        <label htmlFor="inputEmail4">Mã giáo viên</label>
                        <input
                            type="text"
                            className=" form-control"
                            id="inputEmail4"
                            placeholder="Mã giáo viên"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-secondary"
                        style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
                        onClick={handleSubmit}
                    >
                        Tra cứu
                    </button>
                </div>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Mã số</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Phụ trách môn</th>
                        <th scope="col">SDT</th>
                    </tr>
                </thead>
                <tbody>
                    {teacherFinding.length > 0 &&
                        teacherFinding.map((teacher, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{teacher.id}</td>
                                <td>{teacher.name}</td>
                                <td>{teacher.gender}</td>
                                <td>{teacher.subject}</td>
                                <td>{teacher.phone}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-outline-primary"
                                        onClick={() => {
                                            setCurrentID(teachers[index].id);
                                            console.log(currentID);
                                            toggleShow();
                                            handleChange();
                                            // if (grade !== null) {
                                            //     setCurrentGrade(grade.point);
                                            // }
                                            // setBasicModal(true);
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

export default TeacherList;
