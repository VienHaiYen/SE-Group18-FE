import Header from './components/Header';
import Footer from './components/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="d-flex align-items-center justify-content-center">{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
