import Button from '../Button';

function LogInForm() {
    return (
        <div className="d-flex justify-content-center content">
            <form style={{ width: '400px' }} className="text-left" action={'/home'}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Mã số tài khoản</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <Button />
            </form>
        </div>
    );
}

export default LogInForm;
