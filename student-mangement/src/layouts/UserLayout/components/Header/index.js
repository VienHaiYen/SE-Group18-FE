import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header({ navItems, userInfo }) {
    let navigate = useNavigate();
    const handleLogout = async () => {
        let res = await fetch('http://localhost:55000/logout', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'POST',
        });
        let data = await res.json();
        if (data !== undefined) {
            console.log(data);
            navigate('/');
            return data;
        }
    };
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
                        <h4 className="m-0">{userInfo.name}</h4>
                        <p className="font-weight-light text-muted mb-0">{userInfo.role}</p>
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
            {/* <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p> */}
            <div className="text-center">
                <button type="button" className="btn btn-outline-secondary" onClick={handleLogout}>
                    Đăng xuất
                </button>
            </div>
        </div>
    );
}

export default Header;
