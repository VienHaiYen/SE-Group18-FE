import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';

function DefaultLayout({ children, setLogin }) {
    let navigate = useNavigate();

    let object = {
        id: '',
        password: '',
        role: 'student',
    };
    const setAccount = (id, password) => {
        object.id = id;
        object.password = password;
        handleLogin();
    };
    const setRole = (role) => {
        object.role = role;
        console.log(object.role);
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
        let data = await res.json();
        if (data !== undefined) {
            return data;
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng, vui lòng thử lại');
            return null;
        }
    };

    const handleLogin = async () => {
        let account = await fetchAccount(object.id, object.password, object.role);

        // let tmpdata = await Promise(account);
        let tmpdata = account;
        console.log(tmpdata);
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
            <Header setRole={setRole} />
            <div className="d-flex align-items-center justify-content-center">
                {React.cloneElement(children, { submit: setAccount })}
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
