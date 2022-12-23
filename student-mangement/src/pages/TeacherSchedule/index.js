function TeacherSchedule() {
    let isAdmin = true;
    return (
        <>
            <form>
                <h2>Lịch dạy của giáo viên</h2>
                <div className="form-row align-items-end">
                    {isAdmin && (
                        <div className="form-group mr-3">
                            <label htmlFor="inputEmail4">Mã số giáo viên</label>
                            <input
                                type="text"
                                className=" form-control"
                                id="inputEmail4"
                                placeholder="Mã số giáo viên"
                            />
                        </div>
                    )}
                    {isAdmin && (
                        <div className="form-group mr-3">
                            <label htmlFor="inputPassword4">Tên giáo viên</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputPassword4"
                                placeholder="--Tên giáo viên--"
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
                        <th scope="col">Monday</th>
                        <th scope="col">Tuesday</th>
                        <th scope="col">Wednesday</th>
                        <th scope="col">Thursday</th>
                        <th scope="col">Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default TeacherSchedule;
