import './App.css';
import { useState, useEffect } from 'react';
import { DefaultLayout, UserLayout } from './layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

function App() {
    const [loginState, setLoginState] = useState({
        isLogin: false,
        id: '',
        role: '',
        name: '',
        path: [],
    });
    useEffect(() => {
        console.log('tai app.js', loginState);
    }, [loginState]);
    return (
        <Router>
            <div className="App position-relative" style={{ height: '100vh' }}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout setLogin={setLoginState}>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {loginState.isLogin &&
                        privateRoutes.map((route, index) => {
                            const Layout = route.layout || UserLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout loginState={loginState}>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
