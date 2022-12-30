import React from 'react';
import { useState, useEffect } from 'react';
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

    const fetchAccount = async (id, password, role) => {
        let res = await fetch('http://localhost:55000/login', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
            },
            method: 'POST',
            body: JSON.stringify({ id: id, password: password, role: role }),
        });
        console.log('teeeeeew', id, password, role);
        let data = await res.json();
        if (data !== undefined) {
            console.log(data);
            return data;
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng, vui lòng thử lại');
            return null;
        }
    };

    const handleLogin = async () => {
        let account = await fetchAccount(object.id, object.password, object.role);

        let tmpdata = account;
        localStorage.setItem('sid', tmpdata.sid);

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

            console.log(document.cookie);

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
