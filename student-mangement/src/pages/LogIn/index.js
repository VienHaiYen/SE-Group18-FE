import LogInForm from '~/components/LogInForm';

function LogIn({ submit }) {
    return (
        <div className="d-flex justify-content-center">
            <div className=" mt-5 mb-5 p-5 border border-primary rounded-20">
                <h3>GROUP 18 - Đăng nhập vào tài khoản</h3>
                <LogInForm submit={submit} />
            </div>
        </div>
    );
}

export default LogIn;
