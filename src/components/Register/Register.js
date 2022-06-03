import './Register.scss';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { registerNewUser } from '../../services/userServices';

const Register = (props) => {
    let history = useHistory();
    const handleLogin = () => {
        history.push('/login');
    };
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    const defaultValidCheck = {
        emailValid: true,
        nameValid: true,
        phoneValid: true,
        pwdValid: true,
        rePwdValid: true,
    }
    const [objValidInput, setObjValidInput] = useState(defaultValidCheck)


    const isValid = () => {
        setObjValidInput(defaultValidCheck);

        if (!email) {
            toast.error("Email is required");
            setObjValidInput({ ...defaultValidCheck, emailValid: false });
            return false
        }
        const checkEmailRegex = /\S+@\S+\.\S+/;
        if (!checkEmailRegex.test(email)) {
            setObjValidInput({ ...defaultValidCheck, emailValid: false });
            toast.error("Email is wrong")
        }
        if (!fullName) {
            toast.error("Full Name is required");
            setObjValidInput({ ...defaultValidCheck, nameValid: false });
            return false
        }
        if (!phone) {
            toast.error("Phone number is required");
            setObjValidInput({ ...defaultValidCheck, phoneValid: false });
            return false
        }
        if (isNaN(phone)) {
            toast.error("Phone number is wrong type");
            setObjValidInput({ ...defaultValidCheck, phoneValid: false });
            return false
        }
        if (!password) {
            toast.error("Password is required");
            setObjValidInput({ ...defaultValidCheck, pwdValid: false });

            return false
        }
        if (password !== confirmPwd) {
            setObjValidInput({ ...defaultValidCheck, rePwdValid: false });
            toast.error("Re-enter Password do not match");
            return false
        }

        return true
    }


    const handleRegister = async () => {
        let check = isValid();
        if (check === true) {
            let response = await registerNewUser(email, fullName, password, phone);
            let serverData = response.data;
            if (+serverData.EC === 0) {
                toast.success(serverData.EM);
                history.push('/login');
            } else {
                toast.error(serverData.EM);
            }

        }

    }


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
                                    className={objValidInput.emailValid ? "form-control" : "form-control is-invalid"}
                                    name="email"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                    placeholder="Email Address (eg: tom@domain.com)"
                                />
                            </div>
                            <div className="col-12  mt-3 form-group">
                                <input
                                    type="text"
                                    className={objValidInput.nameValid ? 'form-control' : 'form-control is-invalid'}
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(event) => {
                                        setFullName(event.target.value);
                                    }}
                                />
                            </div>
                            <div className="col-12  mt-3 form-group">
                                <input
                                    type="text"
                                    className={objValidInput.phoneValid ? 'form-control' : 'form-control is-invalid'}
                                    name="phone"
                                    placeholder="Phone number"
                                    value={phone}
                                    onChange={(event) => {
                                        setPhone(event.target.value);
                                    }}
                                />
                            </div>
                            <div className="col-12 mt-3">
                                <input
                                    type="password"
                                    className={objValidInput.pwdValid ? 'form-control' : 'form-control is-invalid'}
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
                                    className={objValidInput.rePwdValid ? 'form-control' : 'form-control is-invalid'}
                                    value={confirmPwd}
                                    onChange={(event) => {
                                        setConfirmPwd(event.target.value);
                                    }}
                                    name="re-password"
                                    placeholder="Re-enter Password"
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
