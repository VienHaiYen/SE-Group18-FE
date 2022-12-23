import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function UserLayout({ children }) {
    let role = 0;
    const [navs, setNavs] = useState([]);
    useEffect(() => {
        setNavInRules();
    }, []);

    const setNavInRules = async () => {
        const res = await fetch(`http://localhost:5000/user-layout/${role}`);
        let data = await res.json();
        data = data['display'];
        setNavs(data);
    };
    return (
        <div className="d-flex ">
            <Header navItems={navs} />
            <div className="p-5" style={{ width: '100%' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default UserLayout;
