function classNameList() {
    return (
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
    );
}

export default classNameList;
