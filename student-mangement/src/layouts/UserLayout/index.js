import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';

function UserLayout({ children, loginState }) {
    let navigate = useNavigate();
    let role = 2;
    let user = {
        name: 'Hai Yen',
        role: 'student',
    };
    const [navs, setNavs] = useState([]);
    useEffect(() => {
        console.log(loginState);
    }, []);

    const setNavInRoles = async () => {
        const res = await fetch(`http://localhost:5000/user-layout/${role}`);
        let data = await res.json();
        data = data['display'];
        setNavs(data);
    };
    return (
        <div className="d-flex ">
            <Header navItems={navs} userInfo={user} />
            <div className="p-5" style={{ width: '100%' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default UserLayout;
