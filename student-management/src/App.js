import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout, UserLayout } from '~/layouts';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    let isLogIn;
    isLogIn = true;
    //này là điều hướng trang trong react
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
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {isLogIn &&
                        privateRoutes.map((route, index) => {
                            const Layout = route.layout || UserLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
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
