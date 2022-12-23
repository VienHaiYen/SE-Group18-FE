import './styles.css'
function Information() {
    let students = [
        {
            userName: '20120633',
            name: 'Vien Hai Yen',
            id: '20120633',
            birthday: '23/01/2002',
            gender: 'Nu',
            email: 'yyen9319@gmail.com',
            phone: '0792095933',
            address: '227 Nguyen Van cu Quan 5 TPHCM',
        },
    ];
    return (
        <>
            <h2>Thông tin cá nhân</h2>
            <br />
            <div className="">
                <div style={{ fontSize: '1.2rem', width: '70%', maxWidth: '800px' }}>
                    <div className="form--row">
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}>Username: </b>
                            {students[0].userName}
                        </div>
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Giới tính: </b>
                            {students[0].gender}
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item   ">
                            <b style={{ marginRight: '10px' }}> Họ và tên: </b>
                            {students[0].name}
                        </div>
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Mã số </b>
                            {students[0].id}
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Ngày sinh: </b>
                            {students[0].birthday}
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Email: </b>
                            {students[0].email}
                        </div>
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Số điện thoại: </b>
                            {students[0].phone}
                        </div>
                    </div>
                    <div className="form--row">
                        <div className="form-row-item">
                            <b style={{ marginRight: '10px' }}> Địa chỉ: </b>
                            {students[0].address}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information;
