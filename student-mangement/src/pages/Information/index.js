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

    const [basicModal1, setBasicModal1] = useState(false);
    const [basicModal2, setBasicModal2] = useState(false);

    const toggleShow1 = () => setBasicModal1(!basicModal1);
    const toggleShow2 = () => setBasicModal2(!basicModal2);

    const [oldPass, setOldPass] = useState();
    const [newPass, setNewPass] = useState();
    useEffect(() => {
        // if(role!=='admin')
        handleLoadUser();
    }, []);

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
    return (
        <>
            <>
                <MDBModal show={basicModal1} setShow={setBasicModal1} tabIndex="-1">
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Modal title</MDBModalTitle>
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
                                    <label htmlFor="inputnew">Điểm 45 phút</label>
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
                                    <label htmlFor="inputnew">Điểm 45 phút</label>
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
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={toggleShow1}
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Delete
                </button>
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
