
import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: "", password: "", confirmPass: ""
    })
    const [error, setError] = useState({
        email: "", password: ""
    })
    const handleEmail = (e) => {
        const emailReg = /\S+@\S+\.\S+/;
        const validEmail = emailReg.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setError({ ...error, email: "" });
        } else {
            setError({ ...error, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }
    const handlePassword = (e) => {
        const passwordReg = /.{6,}/;
        const validPassword = passwordReg.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setError({ ...error, password: "" });
        } else {
            setError({ ...error, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    }
    const handleConfirmPassword = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setError({ ...error, password: "" });
        } else {
            setError({ ...error, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    const [user1] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user1) {
            navigate(from);
        }
    }, [user1]);



    return (
        <div className='form-container'>
            <div className="">
                <h3 className='p-3 text-dark '>SignUp</h3>
                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <input onChange={handleEmail} type="email" name="email" id="" placeholder='Email' required />
                        {
                            error?.email && <p>{error.email}</p>
                        }
                    </div>
                    <div className="input-group">

                        <input onChange={handlePassword} type="password" name="Password" id="" placeholder='Password' required />
                        {
                            error?.password && <p>{error.password}</p>
                        }
                    </div>
                    <div className="input-group">

                        <input onChange={handleConfirmPassword} type="password" name="password" id="" placeholder='Confirm Password' required />
                    </div>

                    <div className="submit">
                        <input className="form-submit" type="submit" value="SignUp" />
                    </div>
                </form>
                <p className='text mb-5'>
                    <br />
                    <p className='text-dark'> Already have an account?   <Link className='form-link' to='/login'>LogIn</Link></p>
                </p>

            </div>
        </div>
    );
};

export default SignUp;