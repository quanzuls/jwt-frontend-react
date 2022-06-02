import './Register.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Register = (props) => {
    let history = useHistory();
    const handleLogin = () => {
        history.push('/login');
    };
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    const [emailValid, setEmailValid] = useState('');
    const [nameValid, setNameValid] = useState('');
    const [pwdValid, setPwdValid] = useState('');
    const [rePwdValid, setRePwdValid] = useState('');

    const validateEmail = () => {
        var re = /\S+@\S+\.\S+/;
        re.test(email) ? setEmailValid('is-valid') : setEmailValid('is-invalid');
    }

    const isValid = () => {
        if (!email) {
            toast.error("Email is required");
            setEmailValid('is-invalid')
            return false
        }
        if (!fullName) {
            toast.error("FullName is required");
            setNameValid('is-invalid');
            return false
        }
        if (!password) {
            toast.error("Password is required");
            setPwdValid('is-invalid');
            return false
        }
        if (password !== confirmPwd) {
            toast.error("Re-enter Password do not match");
            setRePwdValid('is-invalid');
            return false
        }
        setEmailValid('is-valid');
        setNameValid('is-valid');
        setPwdValid('is-valid');
        setRePwdValid('is-valid');

        return true
    }
    const handleRegister = () => {
        let check = isValid();
        let userData = { email, fullName, username, password };

    }

    useEffect(() => {
        // axios.get('http://localhost:8080/api/test-api').then(data => {
        //     console.log("check data axios: ", data.data);
        // })
    }, []);
    return (

        <div className="register-container">
            <div className="container">

                <div className="row px-2 px-sm-0">
                    <div className="col-12 col-md-1"> </div>
                    <div className="content-left col-12 col-md-4 text-center text-md-start pt-3 pt-md-5">
                        <div className="brand fs-1 text-primary font-monospace mt-md-5">
                            Sign Up
                        </div>
                        <div className="detail d-none d-md-block">
                            Enjoy to join. It's quick and easy.
                        </div>
                    </div>
                    <div className="content-right col-md-5 col-12 d-flex flex-column gap-3 py-3 mt-3 mt-md-5">
                        <div className="row form-group">
                            <div className="col-12 form-group">
                                <input
                                    type="email"
                                    className={`form-control ${emailValid}`}
                                    name="email"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                        validateEmail();
                                    }}
                                    onBlur={() => validateEmail()}
                                    placeholder="Email Address (eg: tom@domain.com)"
                                />
                            </div>
                            <div className="col-12  mt-3 form-group">
                                <input
                                    type="text"
                                    className={`form-control ${nameValid}`}
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(event) => {
                                        setFullName(event.target.value);
                                    }}
                                />
                            </div>

                            <div className="col-12 mt-3">
                                <input
                                    type="password"
                                    className={`form-control ${pwdValid}`}
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="col-12 mt-3">
                                <input
                                    type="password"
                                    className={`form-control ${rePwdValid}`}
                                    value={confirmPwd}
                                    onChange={(event) => {
                                        setConfirmPwd(event.target.value);
                                    }}
                                    name="re-password"
                                    placeholder="Re-enter Password"
                                />
                            </div>
                            <div className="col-12 mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(event) => {
                                        setUsername(event.target.value);
                                    }}
                                    name="username"
                                    placeholder="User Name"
                                />
                            </div>
                        </div>

                        <button className="btn btn-primary fw-bold btn-height" onClick={() => handleRegister()}>
                            Sign Up
                        </button>
                        <hr />
                        <div className="text-center">
                            <button
                                className="btn btn-success btn-block fw-bold"
                                onClick={() => handleLogin()}
                            >
                                Already've an account. Log in
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-1"> </div>
                </div>
            </div>
        </div >

    );
};

export default Register;
