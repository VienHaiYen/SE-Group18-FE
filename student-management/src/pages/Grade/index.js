let isStudent = false;
function Grade() {
    return (
        <form>
            <h2>Tra cứu điểm số</h2>
            <div className="form-row align-items-end">
                {!isStudent && (
                    <div className="form-group mr-3">
                        <label htmlFor="inputEmail4">Mã số học sinh</label>
                        <input type="text" className=" form-control" id="inputEmail4" placeholder="Mã số học sinh" />
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
    );
}

export default Grade;
