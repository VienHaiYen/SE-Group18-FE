let isStudent = false;
function Grade() {
    return (
        <form>
            <h2>Tra cứu điểm số</h2>
            <div class="form-row align-items-end">
                {!isStudent && (
                    <div class="form-group mr-3">
                        <label for="inputEmail4">Mã số học sinh</label>
                        <input type="text" class=" form-control" id="inputEmail4" placeholder="Mã số học sinh" />
                    </div>
                )}
                {!isStudent && (
                    <div class="form-group mr-3">
                        <label for="inputPassword4">Tên học sinh</label>
                        <input
                            type="text"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="--Tên Học sinh--"
                            disabled
                        />
                    </div>
                )}
                <div class="form-group mr-3">
                    <label for="inputState">Năm học</label>
                    <select id="inputState" class="form-control">
                        <option selected disabled>
                            --Năm học--
                        </option>
                        <option>2019-2020</option>
                        <option>2020-2021</option>
                        <option>20121-2022</option>
                        <option>20122-2023</option>
                    </select>
                </div>
                <div class="form-group mr-3">
                    <label for="inputState">Học kì</label>
                    <select id="inputState" class="form-control">
                        <option selected disabled>
                            --Học kì--
                        </option>
                        <option>Học kì 1</option>
                        <option>Học kì 2</option>
                    </select>
                </div>
                <button
                    type="submit"
                    class="btn btn-secondary"
                    style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
                >
                    Tra cứu
                </button>
            </div>
        </form>
    );
}

export default Grade;
