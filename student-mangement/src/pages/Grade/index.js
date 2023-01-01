import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { useState, useEffect } from 'react';
import { GET, POST } from '../../modules';

function Grade({ id, role }) {
    useEffect(() => {
        if (isStudent) {
            setId(id);
        }
    }, []);
    let isStudent = role === 'student';
    let studentsMathGrades = [
        {
            id: 20120633,
            name: 'Vhyenn',
            oral: 8.5,
            _15min: 7,
            _45min: 9,
            _midterm: 8,
            _finalterm: 9.4,
        },
        {
            id: 20120095,
            name: 'Nqhung',
            oral: 8.5,
            _15min: 7,
            _45min: 9,
            _midterm: 8,
            _finalterm: 9.4,
        },
        {
            id: 20120634,
            name: 'Lmtri',
            oral: 8.5,
            _15min: 7,
            _45min: 9,
            _midterm: 8,
            _finalterm: 9.4,
        },
        {
            id: 20120364,
            name: 'Ppsang',
            oral: 8.5,
            _15min: 7,
            _45min: 9,
            _midterm: 8,
            _finalterm: 9.4,
        },
    ];

    let generalOneStudentGrades = [
        {
            name: 'Toan',
            oral: 8.5,
            _15min: 7,
            _45min: 9,
            _midterm: 8,
            _finalterm: 9.4,
        },
        {
            name: 'Van',
            oral: 8.5,
            _15min: 7,
            _45min: 9,
            _midterm: 8,
            _finalterm: 9.4,
        },
        {
            name: 'Anh',
            oral: 8.5,
            _15min: 7,
            _45min: 9,
            _midterm: 8,
            _finalterm: 9.4,
        },
        {
            name: 'Hoa',
            oral: 8.5,
            _15min: 7,
            _45min: 9,
            _midterm: 8,
            _finalterm: 9.4,
        },
    ];
    const [studentGrade, setStudentGrade] = useState();
    const [classGrade, setClassGrade] = useState();
    const [year, setYear] = useState(2223);
    const [term, setTerm] = useState(1);
    const [ID, setId] = useState('');
    const handleNId = (year, term) => {
        let nid = year * 10 + term;
        return nid.toString();
    };
    const handleGetGrade = (e) => {
        e.preventDefault();

        const handleLoadUser = async () => {
            let nid = handleNId(year, term);
            if (isStudent) {
                setId(id);
            }
            let data = await GET.fetchGradeOneStudent(ID, nid);
            if (data) {
                console.log(data);
                data = data['result'].point.result;
                console.log(data);
                // data = data['result'].point[0].result;
                setStudentGrade(data);
            } else {
                setStudentGrade(null);
                alert('Cannot access data');
            }
        };
        handleLoadUser();
    };
    const handleGetClassGrade = (e) => {
        e.preventDefault();
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
            {!findingState && (
                <>
                    <form>
                        <div className="form-row align-items-end">
                            {!isStudent && (
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
                            {!isStudent && (
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
                                onClick={handleGetGrade}
                            >
                                Tìm kiếm
                            </button>
                        </div>
                    </form>
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
                                            <td>{studentGrade[subject].mieng ? studentGrade[subject].mieng : ''}</td>
                                            <td>{studentGrade[subject]._15 ? studentGrade[subject]._15 : ''}</td>
                                            <td>{studentGrade[subject]._45 ? studentGrade[subject]._45 : ''}</td>
                                            <td>
                                                {studentGrade[subject]._gk !== null ? studentGrade[subject]._gk : ''}
                                            </td>
                                            <td>
                                                {studentGrade[subject]._ck !== null ? studentGrade[subject]._ck : ''}
                                            </td>
                                            <td>
                                                {/* {studentGrade[subject].mieng[0] * 0.1 +
                                                studentGrade[subject]._15[0] * 0.1 +
                                                studentGrade[subject]._45[0] * 0.2 +
                                                studentGrade[subject]._gk * 0.2 +
                                                studentGrade[subject]._ck * 0.4} */}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </>
            )}
            {findingState && (
                <>
                    <form>
                        <div className="form-row align-items-end">
                            <div className="form-group mr-3">
                                <label htmlFor="inputEmail4">Tên lớp</label>
                                <input type="text" className=" form-control" id="inputEmail4" placeholder="Tên lớp" />
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
                                <select id="inputState" className="form-control">
                                    <option defaultValue disabled>
                                        --Môn--
                                    </option>
                                    <option>Toán</option>
                                    <option>Văn</option>
                                    <option>Anh</option>
                                    <option>Lý</option>
                                    <option>Hóa</option>
                                    <option>Sinh</option>
                                    <option>Sử</option>
                                    <option>Địa</option>
                                    <option>GDCD</option>
                                </select>
                            </div>
                            <div className="form-group mr-3">
                                <label htmlFor="inputState">Năm học</label>
                                <select id="inputState" className="form-control">
                                    <option defaultValue disabled>
                                        --Năm học--
                                    </option>
                                    <option>2019-2020</option>
                                    <option>2020-2021</option>
                                    <option>2021-2022</option>
                                    <option>2022-2023</option>
                                </select>
                            </div>
                            <div className="form-group mr-3">
                                <label htmlFor="inputState">Học kì</label>
                                <select id="inputState" className="form-control">
                                    <option defaultValue disabled>
                                        --Học kì--
                                    </option>
                                    <option>Học kì 1</option>
                                    <option>Học kì 2</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-secondary"
                                style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
                                onClick={handleGetClassGrade}
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
                                <th scope="col">Kiểm tra miệng</th>
                                <th scope="col">Kiểm tra 15'</th>
                                <th scope="col">Kiểm tra 45'</th>
                                <th scope="col">Giữa kì</th>
                                <th scope="col">Cuối kì</th>
                                <th scope="col">Tổng kết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generalOneStudentGrades.map((grade, index) => (
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{grade.id}</td>
                                    <td>{grade.name}</td>
                                    <td>{grade.oral}</td>
                                    <td>{grade._15}</td>
                                    <td>{grade._45}</td>
                                    <td>{grade._gk}</td>
                                    <td>{grade._ck}</td>
                                    <td>----</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
}

export default Grade;
