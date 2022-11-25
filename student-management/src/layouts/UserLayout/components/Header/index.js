import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function Header() {
    return (
        <div className="vertical-nav bg-white border" id="sidebar">
            <div className="py-4 px-3 bg-light">
                <div className="media d-flex align-items-center">
                    <img
                        src="https://i.pinimg.com/736x/56/86/03/568603cbd1860c67bf8f6776cbe7f885.jpg"
                        alt="..."
                        style={{ width: '65px', height: '65px' }}
                        className="mr-3 rounded-circle img-thumbnail shadow-sm"
                    />
                    <div className="media-body">
                        <h4 className="m-0">Hai Yen Vien</h4>
                        <p className="font-weight-light text-muted mb-0">Web gamo</p>
                    </div>
                </div>
            </div>

            <ul className="nav flex-column bg-white mb-0">
                <li className="nav-item">
                    <Link to="/home" className="nav-link text-dark font-italic bg-light">
                        <div className="nav-link text-dark font-italic">Trang chủ</div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link text-dark font-italic bg-light">
                        <div className="nav-link text-dark font-italic">Thông tin</div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/grade" className="nav-link text-dark font-italic bg-light">
                        <div className="nav-link text-dark font-italic">Điểm số</div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/schedule" className="nav-link text-dark font-italic bg-light">
                        <div className="nav-link text-dark font-italic">Thời khóa biểu</div>
                    </Link>
                </li>
            </ul>

            <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>
        </div>
    );
}

export default Header;
