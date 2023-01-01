import React from 'react';
import { POST } from '../../modules';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';

function DefaultLayout({ children, setLogin }) {
    let navigate = useNavigate();
    const [role, setRole] = useState('admin');

    let object = {
        id: '',
        password: '',
        role: '',
    };
    const setAccount = (id, password) => {
        object.id = id;
        object.password = password;
        object.role = role;
        handleLogin();
    };
    const setRoleNav = (role) => {
        setRole(role);
        console.log(role);
    };
    const handleLogin = async () => {
        let account = await POST.fetchAccount(object.id, object.password, object.role);
        localStorage.setItem('sid', account.sid);

        if (account !== null) {
            let name = account.name;
            let path = account.display[0];
            let info = {
                isLogin: true,
                id: object.id,
                role: object.role,
                name: name,
                path: path,
            };
            // console.log(document.cookie);
            navigate(path[0].to);
            setLogin(info);
        }
    };
    return (
        <>
            <Header setRole={setRoleNav} />
            <div className="d-flex align-items-center justify-content-center">
                {React.cloneElement(children, { submit: setAccount })}
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
