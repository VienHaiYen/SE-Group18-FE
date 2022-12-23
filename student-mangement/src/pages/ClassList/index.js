function classNameList() {
    let studentList = [
        {
            id: 20120633,
            name: 'hyenn',
            gender: 'male',
            birthday: '23/01/2002',
            sdt: '0792905933',
        },
        {
            id: 20120633,
            name: 'qhung',
            gender: 'male',
            birthday: '23/01/2002',
            sdt: '0792905933',
        },
        {
            id: 20120633,
            name: 'mtri',
            gender: 'male',
            birthday: '23/01/2002',
            sdt: '0792905933',
        },
        {
            id: 20120633,
            name: 'ppsang',
            gender: 'male',
            birthday: '23/01/2002',
            sdt: '0792905933',
        },
    ];
    return (
        <>
            <form>
                <h2>Danh sách lớp</h2>
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
                        <th scope="col">Giới tính</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">SDT</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((grade, index) => (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{grade.id}</td>
                            <td>{grade.name}</td>
                            <td>{grade.gender}</td>
                            <td>{grade.birthday}</td>
                            <td>{grade.sdt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default classNameList;
