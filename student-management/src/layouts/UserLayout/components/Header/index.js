import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Header() {
    var navItems = [
        { to: '/home', label: 'Trang chủ - mn' },
        { to: '/about', label: 'Thông tin - mn ' },
        { to: '/grade', label: 'Điểm số - mn' },
        { to: '/schedule', label: 'Thời khóa biểu - mn' },
        { to: '/input-grade', label: 'Nhập điểm cho học sinh - gv' },
        { to: '/input-student', label: 'Thêm học sinh - ad' },
        { to: '/class-list', label: 'Danh sách lớp - ad, gv' },
        { to: '/teacher-schedule', label: 'Lịch dạy - ad, gv' },
        { to: '/rule', label: 'Quy định - ad' },
    ];

    return (
        <div className="vertical-nav bg-white border" style={{ minWidth: '250px' }} id="sidebar">
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
                {navItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <Link to={item.to} className="nav-link text-dark font-italic bg-light">
                            <div className="nav-link text-dark font-italic">{item.label}</div>
                        </Link>
                    </li>
                ))}
            </ul>

            <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>
        </div>
    );
}

export default Header;
