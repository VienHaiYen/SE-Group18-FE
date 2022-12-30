import { useEffect, useState } from 'react';
function ClassList() {
    const [classID, setClassID] = useState(0);
    const [classList, setClassList] = useState([]);
    const [classMembers, setClassMembers] = useState([]);
    const [year, setYear] = useState(2223);
    const [term, setTerm] = useState(1);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        handleFetchAllStudentInfo();
    }, [classMembers]);
    useEffect(() => {
        // Load danh sach lop moi lan onMouse
        let nid = handleNId(year, term);
        const fetchClassList = async () => {
            let info = await fetch(`http://localhost:55000/api/class-list?nid=${nid}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Cache: 'no-cache',
                    sid: localStorage.getItem('sid'),
                },
                method: 'GET',
            });
            if (info.status !== 200) {
                alert('Khong lay data ve duoc');
            }
            let data = await info.json();
            return data;
        };
        const handleGetClassList = async () => {
            let data = await fetchClassList();
            setClassList(data);
        };
        handleGetClassList();
    }, [term, year]);
    const handleNId = (year, term) => {
        let nid = year * 10 + term;
        return nid.toString();
    };
    //ham lay thong tin moi hoc sinh
    const fetchUser = async (id) => {
        console.log('idonnow');
        let info = await fetch(`http://localhost:55000/api/about/${id}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'GET',
        });
        if (info.status !== 200) {
            alert('Khong lay data ve duoc');
        }
        let data = await info.json();

        return data;
    };

    const handleGetClass = (e) => {
        e.preventDefault();
        let data = classList[classID];
        if (!data) {
            alert('Khong ton tai lop nay');
            return;
        }
        setClassMembers(data.members);
    };
    async function fetchInfo(userIds) {
        const person = userIds.map(async (id) => {
            const user = await fetchUser(id);
            return user;
        });
        const users = await Promise.all(person);
        return users;
    }
    const handleFetchAllStudentInfo = async () => {
        let abc = await fetchInfo(classMembers);
        setStudents(abc);
        return abc;
    };

    return (
        <>
            <form>
                <h2>Danh sách lớp</h2>
                <div className="form-row align-items-end">
                    <div className="form-group mr-3">
                        <label htmlFor="inputEmail4">Tên lớp</label>
                        <select id="yearID" className="form-control" onChange={(e) => setClassID(e.target.value)}>
                            <option defaultValue disabled>
                                --Ten lop--
                            </option>
                            {classList.map((cid, index) => {
                                return <option value={index}>{cid._id}</option>;
                            })}
                        </select>
                        <input
                            type="text"
                            className=" form-control"
                            id="inputEmail4"
                            placeholder="Tên lớp"
                            value={classID}
                            onChange={(e) => {
                                setClassID(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputPassword4">Giáo viên chủ nhiệm</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="--Giáo viên chủ nhiệm--"
                            disabled
                        />
                    </div>
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
                        <th scope="col">Tên học sinh</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">SDT</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((info, index) => (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{info.id}</td>
                            <td>{info.name}</td>
                            <td>{info.gender}</td>
                            <td>{info.birthday}</td>
                            <td>{info.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ClassList;
