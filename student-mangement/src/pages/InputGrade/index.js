function InputGrade() {
    let grades = [
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
    return (
        <>
            <form>
                <h2>Nhập điểm số học sinh</h2>
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
                    </tr>
                </thead>
                <tbody>
                    {grades.map((grade, index) => (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{grade.id}</td>
                            <td>{grade.name}</td>
                            <td>
                                <input type="number" style={{ width: '80px' }} />
                            </td>
                            <td>
                                <input type="number" style={{ width: '80px' }} />
                            </td>
                            <td>
                                <input type="number" style={{ width: '80px' }} />
                            </td>
                            <td>
                                <input type="number" style={{ width: '80px' }} />
                            </td>
                            <td>
                                <input type="number" style={{ width: '80px' }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default InputGrade;
