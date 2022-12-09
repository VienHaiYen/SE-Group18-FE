import './styles.css';
function InputStudent() {
    return (
        <div className="d-flex justify-content-center">
            <div className=" mt-5 mb-5 p-5 border border-primary rounded-20" style={{ width: '80%' }}>
                <h3>Thêm tài khoản</h3>

                <form>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label for="username"> Username: </label>
                            <input id="username" type="text" className="form-control" />
                        </div>
                        <div className="form-row-item">
                            <label for="password"> Password: </label>
                            <input id="password" type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label for="name"> Họ và tên: </label>
                            <input id="name" type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label for="birthday"> Ngày sinh: </label>
                            <input id="birthday" type="date" className="form-control" />
                        </div>
                        <div className="form-row-item">
                            <label for="gender"> Giới tính: </label>
                            <select id="gender" className="form-control">
                                <option value="" selected style={{ display: 'none' }}></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label for="email"> Email: </label>
                            <input id="email" type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label for="tel"> Số điện thoại: </label>
                            <input id="tel" type="tel" className="form-control" />
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label for="address"> Địa chỉ: </label>
                            <input
                                id="address"
                                type="text"
                                className="form-control"
                                placeholder="227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Việt Nam."
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
export default InputStudent;
