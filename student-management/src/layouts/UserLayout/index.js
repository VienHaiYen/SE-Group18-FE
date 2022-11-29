import Header from './components/Header';
import Footer from './components/Footer';

function UserLayout({ children }) {
    return (
        <div className="d-flex ">
            <Header />
            <div className="p-5" style={{ width: '100%' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default UserLayout;
