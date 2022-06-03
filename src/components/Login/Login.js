import './Login.scss';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userServices';

const Login = (props) => {
    let history = useHistory();

    const [valueLogin, setValueLogin] = useState('');
    const [password, setPassword] = useState('');
    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPwd: true,

    }
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

    //Function handle create account btn click
    const handleCreateAccount = () => {
        history.push('/register');
    };

    //Function handle login btn click
    const handleLogin = async () => {
        //Check valid input
        setObjValidInput(defaultObjValidInput);
        if (!valueLogin) {
            toast.error("Please enter email  address or phone number");
            setObjValidInput({ ...defaultObjValidInput, isValidValueLogin: false });
            return;
        } if (!password) {
            toast.error("Please enter your password");
            setObjValidInput({ ...defaultObjValidInput, isValidPwd: false });
            return;
        }
        //Call API to server

        let response = await loginUser(valueLogin, password);
        let serverData = response.data;
        if (response && response.data && +serverData.EC === 0) {
            toast.success(serverData.EM);
            history.push('/login');
        }
        if (response && response.data && +serverData.EC !== 0) {
            toast.error(serverData.EM);
        }



    };

    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-2 px-sm-0">
                    <div className="col-12 col-md-1"> </div>
                    <div className="content-left col-12 col-md-4 text-center text-md-start pt-3 pt-md-5">
                        <div className="brand fs-1 text-primary font-monospace mt-md-5">
                            JWT Website
                        </div>
                        <div className="detail d-none d-md-block">
                            JWT helps you connect and share with the people in your
                            life.
                        </div>
                    </div>
                    <div className="content-right col-md-5 col-12 d-flex flex-column gap-3 py-3 mt-3 mt-md-5">
                        <input
                            type="text"
                            className={objValidInput.isValidValueLogin ? 'form-control' : 'form-control is-invalid'}
                            placeholder="Email address or phone number"
                            value={valueLogin}
                            onChange={(event) => setValueLogin(event.target.value)}
                        />
                        <input
                            type="password"
                            className={objValidInput.isValidPwd ? 'form-control' : 'form-control is-invalid'}

                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <button className="btn btn-primary fw-bold btn-height" onClick={() => handleLogin()}>
                            Log In
                        </button>
                        <span className="text-center">
                            <a href="/lost-pwd" className="forgot-password">
                                Forgot your password?
                            </a>
                        </span>
                        <hr />
                        <div className="text-center">
                            <button
                                className="btn btn-success btn-block fw-bold"
                                onClick={() => handleCreateAccount()}
                            >
                                Create New Account
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-1"> </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
