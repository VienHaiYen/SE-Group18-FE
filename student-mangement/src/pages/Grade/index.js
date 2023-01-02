import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { useState, useEffect } from 'react';
import { GET, POST } from '../../modules';

function Grade({ id, role }) {
    let isStudent = role === 'student';
    useEffect(() => {
        if (isStudent) {
            setId(id);
        }
    }, []);

    const [classID, setClassID] = useState(-1);
    const [classList, setClassList] = useState([]);
    const [classMembers, setClassMembers] = useState([]);

    const [studentGrade, setStudentGrade] = useState();
    // const [classGrade, setClassGrade] = useState();
    const [subject, setSubject] = useState('Toan');
    const [year, setYear] = useState(2223);
    const [term, setTerm] = useState(1);
    const [ID, setId] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        if (role === 'admin') {
            handleGetClassList();
            setClassID(0);
        }
    }, [term, year]);

    const handleGetClassList = async () => {
        let nid = handleNId(year, term);
        // alert(nid);
        let data = await GET.fetchClassList(nid);
        await setClassList(data);
        console.log('ds cac lop', classList);
        return;
    };
    const handleFetchAllStudentGrade = async (classMembers) => {
        let data = await fetchInfo(classMembers);
        return data;
    };

    async function fetchInfo(userIds) {
        let nid = handleNId(year, term);
        const person = userIds.map(async (id) => {
            const user = await GET.fetchGradeAPersonASubject(id, nid, subject);
            return user;
        });
        const users = await Promise.all(person);
        console.log(users);
        return users;
    }
    const handleNId = (year, term) => {
        let nid = year * 10 + term * 1;
        return nid.toString();
    };
    const fetchGradeFromStudent = async (nid) => {
        let res = await fetch(`http://localhost:55000/api/grade?nid=${nid}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'GET',
        });
        if (res.status !== 200) {
            return null;
        }
        let data = await res.json();
        return data;
    };
    const handleGetGrade = (e) => {
        e.preventDefault();
        console.log('loading...');
        const handleLoadUser = async () => {
            let nid = handleNId(year, term);
            if (isStudent) {
                setId(id);
            }
            let data;
            if (isStudent) {
                data = await fetchGradeFromStudent(nid);
                console.log('diem mot hs: ', data);
            } else {
                data = await GET.fetchGradeOneStudent(ID, nid);
            }
            if (data) {
                if (isStudent) {
                    data = data.point.result;
                } else {
                    data = data['result'].point.result;
                }
                console.log(data);
                setStudentGrade(data);
            } else {
                setStudentGrade(null);
                alert('Cannot access data');
            }
        };
        handleLoadUser();
    };

    useEffect(() => {
        const handle = async () => {
            if (classList[classID]) {
                await setClassMembers(classList[classID].members);
                setStudents([]);
                console.log('setclassme,', classMembers);
            }
        };
        handle();
    }, [classID]);
    // useEffect(() => {
    //     const handle = async () => {
    //         let stus = await handleFetchAllStudentGrade(classMembers);
    //         await setStudents(stus);
    //     };
    //     handle();
    // }, classMembers);
    const handleGetClassGrade = async (e) => {
        e.preventDefault();
        const handle = async () => {
            let tmp = await classList[classID].members;
            console.log('first:', tmp);
            let stus = await handleFetchAllStudentGrade(tmp);
            setStudents(stus);
            console.log('sau set egect:', students);
        };
        await handle();
    };
    const [findingState, setFindingState] = useState(!isStudent);
    return (
        <>
            <div className="row">
                <h2 className="mr-5">Tra cứu điểm số</h2>
                {!isStudent && (
                    <BootstrapSwitchButton
                        id="switch-button"
                        checked={findingState}
                        onstyle="dark"
                        onlabel="Theo DS lớp"
                        offlabel="MSHS"
                        width="150"
                        onChange={() => {
                            setFindingState(!findingState);
                        }}
                    />
                )}
            </div>
            {
                <>
                    <form>
                        <div className="form-row align-items-end">
                            {!findingState && !isStudent && (
                                <div className="form-group mr-3">
                                    <label htmlFor="inputEmail4">Mã số học sinh</label>
                                    <input
                                        type="text"
                                        className=" form-control"
                                        id="inputEmail4"
                                        placeholder="Mã số học sinh"
                                        value={ID}
                                        onChange={(e) => setId(e.target.value)}
                                    />
                                </div>
                            )}
                            {!findingState && !isStudent && (
                                <div className="form-group mr-3">
                                    <label htmlFor="inputPassword4">Tên học sinh</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputPassword4"
                                        placeholder="--Tên Học sinh--"
                                        disabled
                                    />
                                </div>
                            )}
                            {findingState && (
                                <>
                                    <div className="form-group mr-3">
                                        <label>Tên lớp</label>
                                        <select
                                            id="yearID"
                                            className="form-control"
                                            onChange={(e) => setClassID(e.target.value)}
                                        >
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
                                        <label htmlFor="inputPassword4">Giáo viên bộ môn</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="--Giáo viên bộ môn--"
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group mr-3">
                                        <label htmlFor="inputState">Môn học</label>
                                        <select
                                            id="inputState"
                                            className="form-control"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                        >
                                            <option defaultValue disabled>
                                                --Môn--
                                            </option>
                                            <option value="Toan">Toán</option>
                                            <option value="Van">Văn</option>
                                            <option value="Anh">Anh</option>
                                            <option value="Li">Lý</option>
                                            <option value="Hoa">Hóa</option>
                                            <option value="Sinh">Sinh</option>
                                            <option value="Su">Sử</option>
                                            <option value="Dia">Địa</option>
                                            <option value="GDCD">GDCD</option>
                                        </select>
                                    </div>
                                </>
                            )}
                            <div className="form-group mr-3">
                                <label htmlFor="yearID">Năm học</label>
                                <select id="yearID" className="form-control" onChange={(e) => setYear(e.target.value)}>
                                    <option defaultValue disabled>
                                        --Năm học--
                                    </option>
                                    <option value={2223}>2022-2023</option>
                                    <option value={2122}>2021-2022</option>
                                    <option value={2021}>2020-2021</option>
                                    <option value={1920}>2019-2020</option>
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
                            {!findingState && (
                                <button
                                    type="submit"
                                    className="btn btn-secondary"
                                    style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
                                    onClick={handleGetGrade}
                                >
                                    Tìm kiếm
                                </button>
                            )}
                            {findingState && (
                                <button
                                    type="submit"
                                    className="btn btn-secondary"
                                    style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
                                    onClick={handleGetClassGrade}
                                >
                                    Tra cứu
                                </button>
                            )}
                        </div>
                    </form>
                    {!findingState && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Môn học</th>
                                    <th scope="col">Kiểm tra miệng (10%)</th>
                                    <th scope="col">Kiểm tra 15' (10%)</th>
                                    <th scope="col">Kiểm tra 45' (20%)</th>
                                    <th scope="col">Giữa kì (20%)</th>
                                    <th scope="col">Cuối kì (40%)</th>
                                    <th scope="col">Tổng kết</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentGrade &&
                                    Object.keys(studentGrade).map((subject, index) => {
                                        if (studentGrade[subject].mieng !== undefined) {
                                            console.log(subject, studentGrade[subject].mieng);
                                        }
                                        // return 0;
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index}</th>
                                                <td>{subject}</td>
                                                <td>
                                                    {studentGrade[subject].mieng ? studentGrade[subject].mieng : ''}
                                                </td>
                                                <td>{studentGrade[subject]._15 ? studentGrade[subject]._15 : ''}</td>
                                                <td>{studentGrade[subject]._45 ? studentGrade[subject]._45 : ''}</td>
                                                <td>
                                                    {studentGrade[subject]._gk !== null
                                                        ? studentGrade[subject]._gk
                                                        : ''}
                                                </td>
                                                <td>
                                                    {studentGrade[subject]._ck !== null
                                                        ? studentGrade[subject]._ck
                                                        : ''}
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    )}
                </>
            }
            {
                <>
                    <form>
                        <div className="form-row align-items-end"></div>
                    </form>
                    {findingState && (
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
                                    <th scope="col">Tổng kết</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students &&
                                    students.map((grade, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index}</th>
                                            <td>{classMembers[index]}</td>
                                            {/* {console.log(classMembers[index], grade)} */}
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
                                            {/* <td>{grade.point.mieng}</td>
                                        <td>{grade.point._15}</td>
                                        <td>{grade.point._45}</td>
                                        <td>{grade.point._gk}</td>
                                        <td>{grade.point._ck}</td> */}
                                            <td>----</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    )}
                </>
            }
        </>
    );
}

export default Grade;
