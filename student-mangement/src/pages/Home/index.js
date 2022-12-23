import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card bg-dark mx-3 text-white my-3 py-5 ">
                        <div className=" mx-5 card-body d-flex justify-content-center flex-column text-center">
                            <h5 className="card-title">Học sinh</h5>
                            <Link to="/class-list">
                                <div className="btn btn-light px-5">GO</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card bg-success mx-3 text-white my-3 py-5 ">
                        <div className=" mx-5 card-body d-flex justify-content-center flex-column text-center">
                            <h5 className="card-title">Giáo viên</h5>
                            <Link to="/teacher-list">
                                <div className="btn btn-light px-5">GO</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-sm-6">
                    <div className="card bg-dark mx-3 text-white my-3 py-5 ">
                        <div className=" mx-5 card-body d-flex justify-content-center flex-column text-center">
                            <h5 className="card-title">Tổng kết</h5>
                            <Link to="/class-list">
                                <div className="btn btn-light px-5">GO</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card bg-dark mx-3 text-white my-3 py-5 ">
                        <div className=" mx-5 card-body d-flex justify-content-center flex-column text-center">
                            <h5 className="card-title">More</h5>
                            <Link to="/class-list">
                                <div className="btn btn-light px-5">GO</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
