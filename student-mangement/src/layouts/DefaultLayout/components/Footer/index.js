function Footer() {
    return (
        <footer className="bg-dark text-center text-white position-absolute " style={{ bottom: 0, left: 0, right: 0 }}>
            <div className="container p-4 ">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button">
                        <i className="ti-facebook"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button">
                        <i className="ti-twitter-alt"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button">
                        <i className="ti-email"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button">
                        <i className="ti-instagram"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button">
                        <i className="ti-linkedin"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button">
                        <i className="ti-github"></i>
                    </a>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright
            </div>
        </footer>
    );
}

export default Footer;
