import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function InputStudent() {
    return (
        <div className="d-flex justify-content-center">
            <div className=" mt-5 mb-5 p-5 border border-primary rounded-20" style={{ width: '80%' }}>
                <h3>Thêm tài khoản</h3>

                <form>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label htmlFor="name"> Họ và tên: </label>
                            <input required id="name" type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label htmlFor="birthday"> Ngày sinh: </label>
                            <input required id="birthday" type="date" className="form-control" />
                        </div>
                        <div className="form-row-item">
                            <label htmlFor="gender"> Giới tính: </label>
                            <select required id="gender" className="form-control">
                                <option value="" defaultValue style={{ display: 'none' }}></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label htmlFor="email"> Email: </label>
                            <input required id="email" type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label htmlFor="tel"> Số điện thoại: </label>
                            <input required id="tel" type="tel"  className="form-control" 
                            placeholder='123-456-7890'/>
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label htmlFor="address"> Địa chỉ: </label>
                            <input
                                required
                                id="address"
                                type="text"
                                className="form-control"
                                placeholder="227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Việt Nam."
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => toast('Wow so easy!')}>
                        Submit
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}
export default InputStudent;
