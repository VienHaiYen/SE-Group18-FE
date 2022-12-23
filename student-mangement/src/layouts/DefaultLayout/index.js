import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function DefaultLayout({ children }) {
    let object = {
        username: '',
        password: '',
        role: 2,
    };
    const setAccount = (username, password) => {
        object.username = username;
        object.password = password;
        handleLogin(username, password);
    };
    const setRole = (role) => {
        object.role = role;
    };
    const fetchAccount = async (id) => {
        let res = await fetch(`http://localhost:5000/account/${id}`);
        if (res.ok) {
            return await res.json();
        } else {
            return null;
        }
    };
    const handleLogin = async (username, password) => {
        let account = await fetchAccount(username);
        if (account == null || account.password !== password || account.role !== object.role) {
            alert('Sai tài khoản hoặc mật khẩu');
            console.log(account.role === object.role);
        } else if (account.password === password && account.role === object.role) {
            alert('da dang nhap');
            window.location.href = '/home';
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
