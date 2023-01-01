import { GET, DELETE } from '../../modules';
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

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
    useEffect(() => {
        handleLoadUser();
    }, []);

    const handleLoadUser = async () => {
        // setUser(null);
        let data = await GET.fetchUser(ID);
        setUser(data);
        console.log('user', data);
    };

    const handleDeleteAccount = async () => {
        let data = await DELETE.deleteAccount(ID);
        toggleShow();
        alert(data.message);
        setUser(null);
    };
    return (
        <>
            <>
                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Modal title</MDBModalTitle>
                            </MDBModalHeader>
                            <MDBModalBody>Bạn có thật sự muốn xóa người dùng có id là {ID} không ?</MDBModalBody>

                            <MDBModalFooter>
                                <button type="button" class="btn btn-outline-secondary" onClick={toggleShow}>
                                    Đóng
                                </button>
                                <button type="button" class="btn btn-outline-danger" onClick={handleDeleteAccount}>
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
                <div className="form-group d-flex ">
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
                </div>
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
                    class="btn btn-danger"
                    onClick={toggleShow}
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Delete
                </button>
            )}
        </>
    );
}

export default Information;
