import { useState, useEffect } from 'react';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function UserLayout({ children, loginState }) {
    const [navs, setNavs] = useState([]);
    const [user, setUser] = useState({
        name: '',
        role: '',
    });
    useEffect(() => {
        console.log(loginState);
        setNavs(loginState.path);
        setUser({
            name: loginState.name,
            role: loginState.role,
        });
    }, []);

    return (
        <div className="d-flex ">
            <Header navItems={navs} userInfo={user} />
            <div className="p-5" style={{ width: '100%' }}>
                {React.cloneElement(children, { id: loginState.id })}
                {/* {children} */}
            </div>
            <Footer />
        </div>
    );
}

export default UserLayout;