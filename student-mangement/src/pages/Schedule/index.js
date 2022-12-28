// check commit
function Schedule() {
    let schedule = [
        ['Chào cờ', 'Toán', 'Toán', 'Anh', 'Lý', 'Thể dục', 'Sử'],
        ['Công nghệ', 'Công nghệ', 'Thẻ dục', 'Tự học', 'Sinh', 'Văn', 'Văn'],
        ['Địa', 'Anh', 'Anh', 'GDCD', 'Tin', 'Toán', 'Văn'],
        ['Hóa', 'Hóa', 'Sử', 'Lý', 'Sinh', 'Anh', 'Văn'],
        ['Lý', 'Toán', 'Toán', 'Hóa', 'Sinh', 'Văn', null],
    ];

    let isStudent = false;
    function transposeArray(array, arrayLength) {
        var newArray = [];
        for (var i = 0; i < arrayLength; i++) {
            newArray.push(new Array(array.length));
        }
        for (var i = 0; i < newArray.length; i++) {
            for (var j = 0; j < array.length; j++) {
                newArray[i][j] = array[j][i];
            }
        }
        return newArray;
    }
    return (
        <>
            <h2>Thời khóa biểu học sinh</h2>
            <form>
                <div className="form-row align-items-end">
                    {!isStudent && (
                        <>
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
                        </>
                    )}
                    {isStudent && (
                        <div className="form-group mr-3">
                            <label htmlFor="inputEmail4">Tên lớp</label>
                            <input
                                type="text"
                                className=" form-control"
                                disabled
                                id="inputEmail4"
                                placeholder="Tên lớp"
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
                    {transposeArray(schedule, 7).map((row, index) =>
                        index === 4 ? (
                            <>
                                <tr key={-1}></tr>
                                <tr key={index}>
                                    <th scope="col">{index + 1}</th>
                                    <td>{row[0]}</td>
                                    <td>{row[1]}</td>
                                    <td>{row[2]}</td>
                                    <td>{row[3]}</td>
                                    <td>{row[4]}</td>
                                </tr>
                            </>
                        ) : (
                            <tr key={index}>
                                <th scope="col">{index + 1}</th>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td>{row[2]}</td>
                                <td>{row[3]}</td>
                                <td>{row[4]}</td>
                            </tr>
                        ),
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Schedule;
