import './styles.css';
import { useState } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function InputStudent() {
    const [findingState, setFindingState] = useState(true);
    return (
        <div className="d-flex justify-content-center">
            <div className=" mt-5 mb-5 p-5 border border-primary rounded-20" style={{ width: '80%' }}>
                <div className=" d-flex justify-content-center mb-5">
                    <h3 className="mr-3 mb-0">Thêm tài khoản</h3>
                    <BootstrapSwitchButton
                        id="switch-button"
                        checked={findingState}
                        onstyle="dark"
                        onlabel="HS"
                        offlabel="GV"
                        width="50"
                        onChange={() => {
                            setFindingState(!findingState);
                        }}
                    />
                </div>
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
                        {!findingState ? (
                            <div className="form-row-item">
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
                        ) : (
                            <div className="form-row-item">
                                <label htmlFor="inputState">Khối</label>
                                <select id="inputState" className="form-control">
                                    <option defaultValue disabled>
                                        Khối
                                    </option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                            </div>
                        )}
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label htmlFor="tel"> Số điện thoại: </label>
                            <input required id="tel" type="tel" className="form-control" placeholder="123-456-7890" />
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
