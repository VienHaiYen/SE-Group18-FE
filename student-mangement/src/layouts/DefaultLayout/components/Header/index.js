import { useState } from 'react';
function Header({ setRole }) {
    let states, links;
    states = ['GIÁO VIÊN', 'ADMIN', 'HỌC SINH'];
    links = ['#gv', '#admin', '#hs'];
    const [id, setId] = useState(2);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a className="navbar-brand" href="#log-in" style={{ minWidth: '250px' }}>
                ĐĂNG NHẬP - {states[id]}
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="
            collapse 
            navbar-collapse"
                id="navbarNav"
            >
                <ul className="navbar-nav">
                    {states.map((name, index) => (
                        <li
                            key={index}
                            className="nav-item"
                            onClick={() => {
                                setId(index);
                                let role = index === 0 ? 'teacher' : index === 1 ? 'admin' : 'student';
                                setRole(role);
                            }}
                        >
                            <a className="nav-link" href={links[index]}>
                                {name}
                                <span className="sr-only sr-only-focusable">(current)</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Header;
