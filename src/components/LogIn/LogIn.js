import { signInWithEmailAndPassword } from 'firebase/auth';
/*import React, { useEffect, useState } from 'react';

import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const LogIn = () => {
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    //console.log(auth)
    const [user] = useAuthState(auth);
    const [userInformation, setUserInformation] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });


    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const valueEmail = emailRegex.test(e.target.value);

        if (valueEmail) {
            setUserInformation({ ...userInformation, email: e.target.value })
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Envalid Email" });
            setUserInformation({ ...userInformation, email: "" })
        }
    }


    const handlePassword = (e) => {
        const passRegex = /.{6,}/;
        const valuePassword = passRegex.test(e.target.value);

        if (valuePassword) {
            setUserInformation({ ...userInformation, password: e.target.value })
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters" })
            setUserInformation({ ...userInformation, password: "" })
        }

    }

    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    // useEffect(() => {
    //     if (user) {
    //         navigate(from);
    //     }
    // }, [user]);

    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(userInformation.email, userInformation.password);
    }
    return (
        <div className=''>
            <div className="w-25 mx-auto mt-5 shadow p-3 mb-5 bg-body rounded ">
                <form onSubmit={handleSubmit}>
                    <h1>LogIn</h1>
                    <div className="mb-3">
                        <input onChange={handleEmail} type="email" className="form-control" aria-describedby="emailHelp" placeholder='email' />
                    </div>
                    <div className="mb-3">
                        <input onChange={handlePassword} type="password" className="form-control" placeholder='password' />
                        <br /><p>New to Buswala?<NavLink to='/signup'>SignUp</NavLink></p>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br /> <br />

                </form>
                <button className='btn btn-outline-warning' onClick={() => signInWithGoogle()}>continue with google</button>

            </div>

        </div>
    );

};

export default LogIn;*/
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './LogIn.css'

const LogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [userInfo, setUserInfo] = useState({
        email: "", password: "", confirmPass: ""
    })
    const [error, setError] = useState({
        email: "", password: ""
    })
    const handleEmailLogIn = (e) => {
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
    const handlePasswordLogIn = (e) => {
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
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);


    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast.success('Sent email');
        }
        else {
            toast.error('please enter your email address');
        }
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
                <h3 className='p-3 text-dark'>LogIn</h3>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input onChange={handleEmailLogIn} type="email" name="email" placeholder='Email' required />
                        {
                            error?.email && <p>{error.email}</p>
                        }

                    </div>
                    <div className="input-group">
                        <input onChange={handlePasswordLogIn} type="password" name="password" placeholder='Password' required />
                        {
                            error?.password && <p>{error.password}</p>
                        }
                    </div>

                    <div className="submit">
                        <input className="form-submit" type="submit" value="Login" />
                    </div>
                </form>

                <button className='button1' onClick={resetPassword}>Forget password?</button>

                <hr />
                <button className='button2' onClick={() => signInWithGoogle()}>continue with google</button>

                <p className='text'>
                    <p className='text-dark'> New to Car dealer? <Link className='form-link' to='/signup'>Create an Account</Link></p>

                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LogIn;