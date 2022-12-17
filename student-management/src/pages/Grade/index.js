import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { useState } from 'react';

let isStudent = false;
function Grade() {
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
    const [findingState, setFindingState] = useState(true);
    return (
        <>
            <div className="row">
                <h2 className="mr-5">Tra cứu điểm số</h2>
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
                                <label htmlFor="inputState">Năm học</label>
                                <select id="inputState" className="form-control">
                                    <option defaultValue disabled>
                                        --Năm học--
                                    </option>
                                    <option>2019-2020</option>
                                    <option>2020-2021</option>
                                    <option>20121-2022</option>
                                    <option>20122-2023</option>
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
                            >
                                Tra cứu
                            </button>
                        </div>
                    </form>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Môn học</th>
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
                                    <td>{grade.name}</td>
                                    <td>{grade.oral}</td>
                                    <td>{grade._15min}</td>
                                    <td>{grade._45min}</td>
                                    <td>{grade._midterm}</td>
                                    <td>{grade._finalterm}</td>
                                    <td>----</td>
                                </tr>
                            ))}
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
                                    <option>20121-2022</option>
                                    <option>20122-2023</option>
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
                            {studentsMathGrades.map((grade, index) => (
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{grade.id}</td>
                                    <td>{grade.name}</td>
                                    <td>{grade.oral}</td>
                                    <td>{grade._15min}</td>
                                    <td>{grade._45min}</td>
                                    <td>{grade._midterm}</td>
                                    <td>{grade._finalterm}</td>
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
