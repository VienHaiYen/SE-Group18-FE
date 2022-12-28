import './styles.css';
import { useState, useEffect } from 'react';
function Information({ id }) {
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            let info2 = await fetch('http://localhost:55000/api/about', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Cache: 'no-cache',
                    sid: localStorage.getItem('sid'),
                },
                method: 'GET',
            });

            let data = await info2.json();

            console.log('info: ', data);
            return data;
        };
        const handleLoadUser = async () => {
            let data = await fetchUser();
            setUser(data);
        };
        handleLoadUser();
    }, []);
    return (
        <>
            <h2>Thông tin cá nhân</h2>
            <br />
            <div className="">
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
            </div>
        </>
    );
}

export default Information;
