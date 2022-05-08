/*import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {

    const [user] = useAuthState(auth);


    const [userInformation, setuserInformation] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const [
        createUserWithEmailAndPassword,
        user1,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const valueEmail = emailRegex.test(e.target.value);

        if (valueEmail) {
            setuserInformation({ ...userInformation, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setuserInformation({ ...userInformation, email: "" });
        }

    };

    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const valuePassword = passwordRegex.test(e.target.value);

        if (valuePassword) {
            setuserInformation({ ...userInformation, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setuserInformation({ ...userInformation, password: "" });
        }
    };

    const handleConfirmPassword = (e) => {
        if (e.target.value === userInformation.password) {
            setuserInformation({ ...userInformation, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setuserInformation({ ...userInformation, confirmPass: "" });
        }
    };
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
        createUserWithEmailAndPassword(userInformation.email, userInformation.password);
    }
    return (
        <div>
            <div className="w-25 mx-auto mt-5 shadow p-3 mb-5 bg-body rounded">
                <form onSubmit={handleSubmit}>
                    <h1>SignUp</h1>
                    <div className="mb-3">
                        <input onChange={handleEmail} type="email" className="form-control" aria-describedby="emailHelp" placeholder='email' />
                        {errors?.email && <p className='error_msg' >{errors.email}</p>}
                    </div>
                    <div className="mb-3">
                        <input onChange={handlePassword} type="password" className="form-control" placeholder='password' />
                        {errors?.password && <p className='error_msg' >{errors.password}</p>}
                    </div>
                    <div className="mb-3">
                        <input onChange={handleConfirmPassword} type="password" className="form-control" placeholder='confirm password' />

                    </div>
                    <button type="submit" className=" w-100 btn btn-outline-warning">SignUp</button>

                    <br />
                    <p>Already have an account? <Link to='/login'>LogIn</Link></p>

                </form>

            </div>
        </div>
    );
};

export default SignUp;*/
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