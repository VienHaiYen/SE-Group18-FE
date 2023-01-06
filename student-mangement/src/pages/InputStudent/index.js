import './styles.css';
import { GET, POST } from '../../modules';
import { useEffect, useState } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import 'react-toastify/dist/ReactToastify.css';
function InputStudent() {
    const [info, setInfo] = useState({
        name: '',
        birthday: '',
        address: '',
        gender: '',
        mail: '',
        phone: '',
        _class: '',
        subject: '',
    });
    const [findingState, setFindingState] = useState(true);

    useEffect(() => {
        if (findingState === true) {
            setInfo((prevState) => ({
                ...prevState,
                subject: '',
            }));
            console.log(info);
        } else {
            setInfo((prevState) => ({
                ...prevState,
                _class: '',
            }));
            console.log(info);
        }
    }, [findingState]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(info);
    };
    const postInputStudent = async (info) => {
        let tmp = new Date(info['birthday']);
        console.log(tmp);
        var temp;
        if (tmp != '' ){
            temp =
            ('0' + tmp.getDate()).slice(-2) + '/' + ('0' + (tmp.getMonth() + 1)).slice(-2) + '/' + tmp.getFullYear();
        }
        let res = await fetch('http://localhost:55000/api/input-student', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'POST',
            body: JSON.stringify({
                name: info.name,
                birthday: temp,
                address: info.address,
                gender: info.gender,
                mail: info.mail,
                phone: info.phone,
                _class: info._class,
                subject: '',
            }),
        });
        let data = await res.json();
        if (data.status === 200) {
            return data;
        } else {
            alert(data.message);
            return null;
        }
    };
    const postInputTeacher = async () => {
        let tmp = new Date(info['birthday']);

        let temp =
            ('0' + tmp.getDate()).slice(-2) + '/' + ('0' + (tmp.getMonth() + 1)).slice(-2) + '/' + tmp.getFullYear();
        console.log(456, temp);
        let res = await fetch('http://localhost:55000/api/input-teacher', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'POST',
            body: JSON.stringify({
                name: info.name,
                birthday: temp,
                address: info.address,
                gender: info.gender,
                mail: info.mail,
                phone: info.phone,
                _class: '',
                subject: info.subject,
            }),
        });
        let data = await res.json();
        if (data.status === 200) {
            return data;
        } else {
            alert(data.message);
            return null;
        }
    };
    const handleInput = async (e) => {
        e.preventDefault();
        if (findingState) {
            let msg = await postInputStudent(info);
            console.log(msg);
        } else {
            let msg = await postInputTeacher(info);
            console.log(msg);
        }
    };

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
                            if (!findingState) {
                                setInfo((prevState) => ({
                                    ...prevState,
                                    _class: '',
                                }));
                                console.log('info', info._class);
                            } else {
                                setInfo((prevState) => ({
                                    ...prevState,
                                    subject: '',
                                }));
                            }
                            console.log(info.subject, info._class);
                        }}
                    />
                </div>
                <form>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label htmlFor="name"> Họ và tên: </label>
                            <input
                                required
                                id="name"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={info.name}
                                name="name"
                            />
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label htmlFor="birthday"> Ngày sinh: </label>
                            <input
                                required
                                id="birthday"
                                type="date"
                                className="form-control"
                                onChange={handleChange}
                                value={info.birthday}
                                name="birthday"
                            />
                        </div>
                        <div className="form-row-item">
                            <label htmlFor="gender"> Giới tính: </label>
                            <select
                                required
                                id="gender"
                                className="form-control"
                                onChange={handleChange}
                                value={info.gender}
                                name="gender"
                            >
                                <option value="" defaultValue style={{ display: 'none' }}></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label htmlFor="email"> Email: </label>
                            <input
                                required
                                id="email"
                                type="email"
                                className="form-control"
                                onChange={handleChange}
                                value={info.mail}
                                name="mail"
                            />
                        </div>
                        {!findingState ? (
                            <div className="form-row-item">
                                <label htmlFor="inputState">Môn học</label>
                                <select
                                    id="inputState"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={info.subject}
                                    name="subject"
                                >
                                    <option defaultValue disabled>
                                        --Môn--
                                    </option>
                                    <option value="Toan">Toán</option>
                                    <option value="Van">Văn</option>
                                    <option value="Anh">Anh</option>
                                    <option value="Li">Lý</option>
                                    <option value="Hoa">Hóa</option>
                                    <option value="Sinh">Sinh</option>
                                    <option value="Su">Sử</option>
                                    <option value="Dia">Địa</option>
                                    <option value="GDCD">GDCD</option>
                                </select>
                            </div>
                        ) : (
                            <div className="form-row-item">
                                <label htmlFor="inputState">Lớp</label>
                                {/* <select
                                    id="inputState"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={info._class}
                                    name="_class"
                                >
                                    <option defaultValue disabled>
                                        Khối
                                    </option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select> */}
                                <input
                                    // required
                                    id="_class"
                                    type="_class"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={info._class}
                                    name="_class"
                                />
                            </div>
                        )}
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <label htmlFor="tel"> Số điện thoại: </label>
                            <input
                                required
                                id="tel"
                                type="tel"
                                className="form-control"
                                placeholder="123-456-7890"
                                onChange={handleChange}
                                value={info.phone}
                                name="phone"
                            />
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
                                onChange={handleChange}
                                value={info.address}
                                name="address"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleInput}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
export default InputStudent;
