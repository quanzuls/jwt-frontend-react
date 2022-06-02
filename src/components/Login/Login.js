import './Login.scss';
import { useHistory } from "react-router-dom";
const Login = (props) => {
    let history = useHistory();
    const handleCreateAccount = () => {
        history.push('/register');

    }
    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-2 px-sm-0">
                    <div className="col-12 col-md-1"> </div>
                    <div className="content-left col-12 col-md-4 text-center text-md-start pt-3 pt-md-5">
                        <div className='brand fs-1 text-primary font-monospace mt-md-5'>JWT Website</div>
                        <div className='detail d-none d-md-block'>
                            JWT helps you connect and share with the people in your life.
                        </div>
                    </div>
                    <div className="content-right col-md-5 col-12 d-flex flex-column gap-3 py-3 mt-3 mt-md-5">
                        <input type="text" className='form-control' placeholder='Email address or phone number' />
                        <input type="password" className='form-control' placeholder='Password' />
                        <button className='btn btn-primary fw-bold btn-height'>Log In</button>
                        <span className='text-center'>
                            <a href='#' className='forgot-password'>Forgot your password?</a>
                        </span>
                        <hr />
                        <div className='text-center'>
                            <button className="btn btn-success btn-block fw-bold" onClick={() => handleCreateAccount()}>Create New Account</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-1"> </div>
                </div>
            </div >

        </div >
    );
}

export default Login;