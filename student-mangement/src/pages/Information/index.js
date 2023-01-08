import { GET, DELETE, POST } from '../../modules';
import './styles.css';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
function Information({ id, role }) {
    let isAdmin = role === 'admin';
    const [user, setUser] = useState({});
    const [ID, setId] = useState('');
    const [classList, setClassList] = useState([]);

    const [basicModal1, setBasicModal1] = useState(false);
    const [basicModal2, setBasicModal2] = useState(false);
    const [basicModal3, setBasicModal3] = useState(false);

    const toggleShow1 = () => setBasicModal1(!basicModal1);
    const toggleShow2 = () => setBasicModal2(!basicModal2);
    const toggleShow3 = () => setBasicModal3(!basicModal3);

    const [oldPass, setOldPass] = useState();
    const [newPass, setNewPass] = useState();

    const [addID, setAddID] = useState();

    useEffect(() => {
        // if(role!=='admin')
        handleLoadUser();
        handleGetClassList();
    }, []);
    const handleGetClassList = async () => {
        let nid = 22231;
        // alert(nid);
        let data = await GET.fetchClassList(nid);
        await setClassList(data);
        console.log('ds cac lop', classList);
        return;
    };
    const handleLoadUser = async (e) => {
        // setUser(null);
        if (role === 'admin') {
            if (e !== undefined) {
                e.preventDefault();
            }
        }
        let data = await GET.fetchUser(ID);
        setUser(data);
        console.log('user', data);
    };

    const handleDeleteAccount = async () => {
        let data = await DELETE.deleteAccount(ID);
        toggleShow1();
        alert(data.message);
        setUser(null);
    };

    const handleChangePassword = async () => {
        let data = await POST.changePassword(oldPass, newPass);
        alert(data.message);
        toggleShow2();
        // setUser(null);
    };
    const convertIdToClassname = (id) => {
        return id.substring(1, 3) + 'a' + id.substring(3);
    };
    const changeClass = async (id, _class) => {
        let nid = 22231;
        console.log(123, id, _class);
        let res = await fetch(`http://localhost:55000/api/transfer-student-to-class`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'POST',
            body: JSON.stringify({
                nid: nid,
                id: id,
                classId: _class,
            }),
        });

        let data = await res.json();
        alert(data.message);
        if (data) {
            return data;
        } else {
            alert('Loi khong them lop cho gv duoc');
            return [];
        }
    };
    const handleChangeClass = async () => {
        let data = await changeClass(ID, addID);
        setAddID('');
        handleLoadUser();
        return data;
    };
    return (
        <>
            <>
                <MDBModal show={basicModal1} setShow={setBasicModal1} tabIndex="-1">
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Xóa tài khoản</MDBModalTitle>
                            </MDBModalHeader>
                            <MDBModalBody>Bạn có muốn xoá tài khoàn có id là {ID} không?</MDBModalBody>

                            <MDBModalFooter>
                                <button type="button" className="btn btn-outline-secondary" onClick={toggleShow1}>
                                    Đóng
                                </button>
                                <button type="button" className="btn btn-outline-danger" onClick={handleDeleteAccount}>
                                    Đồng ý
                                </button>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>

                <MDBModal show={basicModal2} setShow={setBasicModal2} tabIndex="-1">
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle> Đổi mật khẩu</MDBModalTitle>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <div className="form-group mr-3">
                                    <label htmlFor="inputold4">Mật khẩu hiện tại</label>
                                    <input
                                        type="password"
                                        className=" form-control"
                                        id="inputold4"
                                        placeholder="Mật khẩu hiện tại"
                                        value={oldPass}
                                        name="oldPass"
                                        onChange={(e) => setOldPass(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mr-3">
                                    <label htmlFor="inputnew">Mật khẩu mới</label>
                                    <input
                                        type="password"
                                        className=" form-control"
                                        id="inputnew"
                                        placeholder="Mật khẩu mới"
                                        value={newPass}
                                        name="newPass"
                                        onChange={(e) => setNewPass(e.target.value)}
                                    />
                                </div>
                            </MDBModalBody>

                            <MDBModalFooter>
                                <button type="button" className="btn btn-outline-secondary" onClick={toggleShow2}>
                                    Đóng
                                </button>
                                <button type="button" className="btn btn-outline-danger" onClick={handleChangePassword}>
                                    Đồng ý
                                </button>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>

                <MDBModal show={basicModal3} setShow={setBasicModal3} tabIndex="-1">
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Chuyển lớp</MDBModalTitle>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <div className="form-group mr-3">
                                    <label htmlFor="inputold4">Lớp hiện tại</label>
                                    <input
                                        className=" form-control"
                                        id="inputold4"
                                        placeholder="Lớp hiện tại"
                                        value={user._class ? convertIdToClassname(user._class) : ''}
                                        disabled
                                    />
                                </div>
                                <div className="form-group mr-3">
                                    <label htmlFor="inputnew">Chuyển đến</label>
                                    <select
                                        className="form-control"
                                        onChange={(e) => {
                                            setAddID(e.target.value);
                                            console.log(addID);
                                        }}
                                        style={{ width: '100px', marginRight: '20px' }}
                                    >
                                        <option value="" defaultValue style={{ display: 'none' }}></option>
                                        {classList &&
                                            classList.map((_class, index) => {
                                                return (
                                                    <option value={_class.id}>{convertIdToClassname(_class.id)}</option>
                                                );
                                            })}
                                    </select>
                                </div>
                            </MDBModalBody>

                            <MDBModalFooter>
                                <button type="button" className="btn btn-outline-secondary" onClick={toggleShow3}>
                                    Đóng
                                </button>
                                <button type="button" className="btn btn-outline-danger" onClick={handleChangeClass}>
                                    Đồng ý
                                </button>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </>
            <h2>Thông tin cá nhân</h2>
            <br />
            {isAdmin && (
                <form className="form-group d-flex ">
                    <label htmlFor="inputEmail4">Mã số</label>
                    <input
                        style={{ maxWidth: '200px', marginLeft: '12px', transform: 'translateY(-8px)' }}
                        type="text"
                        className=" form-control"
                        id="inputEmail4"
                        placeholder="Mã số học sinh"
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                        value={ID}
                    />
                    <button
                        type="submit"
                        className="btn btn-secondary"
                        style={{ height: '40px', marginLeft: '20px', transform: 'translateY(-8px)' }}
                        onClick={handleLoadUser}
                    >
                        Tìm kiếm
                    </button>
                </form>
            )}
            {user && user.id && (
                <div style={{ fontSize: '1.2rem', width: '70%', maxWidth: '800px' }}>
                    <div className="form--row">
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}>Username: </b>
                            {user.id}
                        </div>
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Giới tính: </b>
                            {user.gender}
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item   ">
                            <b style={{ marginRight: '10px' }}> Họ và tên: </b>
                            {user.name}
                        </div>
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Mã số </b>
                            {user.id}
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Ngày sinh: </b>
                            {user.birthday}
                        </div>
                        {user.role === 'teacher' && (
                            <div className="form-row-item">
                                <b style={{ marginRight: '10px' }}> Dạy môn: </b>
                                {user.subject}
                            </div>
                        )}
                        {user.role === 'student' && (
                            <div className="form-row-item">
                                <b style={{ marginRight: '10px' }}> Lớp: </b>
                                {convertIdToClassname(user._class)}
                            </div>
                        )}
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Email: </b>
                            {user.mail}
                        </div>
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Số điện thoại: </b>
                            {user.phone}
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Địa chỉ: </b>
                            {user.address}
                        </div>
                    </div>
                </div>
            )}
            {user && user.id && isAdmin && user.role !== 'admin' && (
                <>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={toggleShow1}
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        Delete
                    </button>

                    <button
                        type="button"
                        className="btn btn-warning ml-2"
                        onClick={toggleShow3}
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        Chuyển lớp
                    </button>
                </>
            )}
            {!(isAdmin && id !== user.id) && (
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={toggleShow2}
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Đổi mật khẩu
                </button>
            )}
        </>
    );
}

export default Information;
