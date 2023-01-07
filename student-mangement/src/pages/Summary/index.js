import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { GET } from '../../modules';
import { useState, useEffect } from 'react';
function Summary() {
    const DTB = 5;
    const [findBySubject, setFindingBySubject] = useState(true);

    // const [classID, setClassID] = useState(0);
    const [classList, setClassList] = useState([]);
    // const [classMembers, setClassMembers] = useState([]);
    const [year, setYear] = useState(2223);
    const [term, setTerm] = useState(1);
    const [students, setStudents] = useState([]);
    const [subject, setSubject] = useState('Toan');
    const [nid, setNID] = useState();

    const [fake1, setFake1] = useState();
    const [fake2, setFake2] = useState();
    useEffect(() => {
        const handle = async () => {
            await setStudents(null);
            console.log('changed');
        };
        handle();
    }, [findBySubject]);
    useEffect(() => {
        const handleGetClassList = async () => {
            let tmp = handleNId(year, term);
            setNID(tmp);
            let data = await GET.fetchClassList(tmp);
            setClassList(data);
            return;
        };
        handleGetClassList();
    }, [term, year]);

    const handleNId = (year, term) => {
        let nid = year * 10 + term * 1;
        return nid.toString();
    };

    const handleGetGrade = async (e) => {
        e.preventDefault();
        await handleGetAllClasses();
    };
    const getAllInfo = async (userIds) => {
        const person = userIds.map(async (id) => {
            if (findBySubject) {
                const data = await GET.fetchGradeAPersonASubject(id, nid, subject);
                return data;
            } else {
                const data = await GET.fetchGradeOneStudent(id, nid);
                return data;
            }
        });
        const users = await Promise.all(person);
        return users;
    };

    const getAllClasses = async (classeItems) => {
        const _class = classeItems.map(async (_class) => {
            const data = await handleFetchStudentInClass(_class.members);
            console.log(123, data);
            return { id: _class.className, data: data };
        });
        const users = await Promise.all(_class);
        return users;
    };
    const handleFetchStudentInClass = async (members) => {
        let data = await getAllInfo(members);
        // setStudents(data);
        return data;
    };
    const handleGetAllClasses = async (members) => {
        let data = await getAllClasses(classList);
        console.log('result: ', data);
        setStudents(data);
        // let tmp = await students;
        if (findBySubject) {
            await setFake1(data);
        } else {
            await setFake2(data);
        }
        console.log('fake1:', fake1);
        console.log('fake2:', fake2);
        return data;
    };
    const avgOneStudent = (subjects) => {
        // console.log(subjects);
        const n = Object.keys(subjects).length;
        let result = Object.keys(subjects).reduce((acc, subject) => {
            let avg =
                subjects[subject].mieng * 0.1 +
                subjects[subject]._15 * 0.1 +
                subjects[subject]._45 * 0.2 +
                subjects[subject]._gk * 0.2 +
                subjects[subject]._ck * 0.4;
            return acc + avg / n;
        }, 0);

        return result;
    };
    return (
        <>
            <h1>Bảng tổng kết năm học</h1>
            <BootstrapSwitchButton
                id="switch-button"
                checked={findBySubject}
                onstyle="dark"
                onlabel="Môn"
                offlabel="Học kì"
                width="150"
                onChange={() => {
                    setFindingBySubject(!findBySubject);
                }}
            />
            <div className="form-row align-items-end">
                {findBySubject && (
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
                )}
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
                {/* {findBySubject && ( */}
                <button
                    type="submit"
                    className="btn btn-secondary"
                    style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
                    onClick={handleGetGrade}
                >
                    Tìm kiếm
                </button>
                {/* )} */}
            </div>
            {findBySubject && (
                <table className="table table-bordered mb-5">
                    <thead>
                        <tr>
                            <th scope="col" colspan="5">
                                <h5 className="text-center">TỔNG KẾT THEO MÔN</h5>
                            </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Lớp</th>
                            <th scope="col">Sỉ số</th>
                            <th scope="col">Số lượng đạt</th>
                            <th scope="col">Tỉ lệ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {findBySubject &&
                            fake1 &&
                            students &&
                            fake1.map((_class, index) => {
                                console.log(_class);
                                let success = _class.data.reduce((accur, member) => {
                                    let avg =
                                        member.point.mieng * 0.1 +
                                        member.point._15 * 0.1 +
                                        member.point._45 * 0.2 +
                                        member.point._gk * 0.2 +
                                        member.point._ck * 0.4;
                                    if (avg >= DTB) {
                                        return accur + 1;
                                    }
                                    return accur;
                                }, 0);
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{_class.id}</td>
                                        <td>{_class.data.length}</td>
                                        <td>{success}</td>
                                        <td>{((success / _class.data.length) * 100).toFixed(2)}%</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            )}

            {!findBySubject && (
                <table className="table table-bordered mb-5">
                    <thead>
                        <tr>
                            <th scope="col" colspan="5">
                                <h5 className="text-center">TỔNG KẾT THEO HỌC KÌ</h5>
                            </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Lớp</th>
                            <th scope="col">Sỉ số</th>
                            <th scope="col">Số lượng đạt</th>
                            <th scope="col">Tỉ lệ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!findBySubject &&
                            fake2 &&
                            students &&
                            fake2.map((_class, index) => {
                                console.log(_class);
                                let success = _class.data.reduce((accur, member) => {
                                    console.log(member.result.point.result);
                                    let avg = avgOneStudent(member.result.point.result);
                                    console.log(avg);
                                    if (avg >= DTB) {
                                        return accur + 1;
                                    }
                                    return accur;
                                }, 0);
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{_class.id}</td>
                                        <td>{_class.data.length}</td>
                                        <td>{success}</td>
                                        <td>{((success / _class.data.length) * 100).toFixed(2)}%</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Summary;
