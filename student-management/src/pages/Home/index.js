function Home() {
    return (
        <>
            <h1>Đây là Home Page</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card bg-dark mx-3 text-white my-3 py-5 ">
                        <div className=" mx-5 card-body d-flex justify-content-center flex-column text-center">
                            <h5 className="card-title">Học sinh</h5>
                            <a href="#" className="btn btn-light">
                                Go
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card bg-success mx-3 text-white my-3 py-5 ">
                        <div className=" mx-5 card-body d-flex justify-content-center flex-column text-center">
                            <h5 className="card-title">Giáo viên</h5>
                            <a href="#" className="btn btn-light">
                                Go
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card bg-info  mx-3 text-white my-3 py-5 ">
                        <div className=" mx-5 card-body d-flex justify-content-center flex-column text-center">
                            <h5 className="card-title">Học sinh</h5>
                            <a href="#" className="btn btn-light">
                                Go
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card bg-secondary  mx-3 text-white my-3 py-5 ">
                        <div className=" mx-5 card-body d-flex justify-content-center flex-column text-center">
                            <h5 className="card-title">Giáo viên</h5>
                            <a href="#" className="btn btn-light">
                                Go
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
