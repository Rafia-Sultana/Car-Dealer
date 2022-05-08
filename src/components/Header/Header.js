/*import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/logo-light.png'
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <img className='logo' src={logo} alt="" />
                 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
                            <li className="nav-item">

                                <NavLink className='text-decoration-none me-2 text-white ' to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='text-decoration-none me-2 text-white ' to='/blog'>Blog</NavLink>
                            </li>

                            {
                                user?<>
                            
                            <li className="nav-item">
                                <NavLink className='text-decoration-none me-2 text-white ' to='/manageitem'>ManageItems</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='text-decoration-none me-2 text-white ' to='/additem'>AddItem</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='text-decoration-none me-2 text-white ' to='/myitem'>MyItem</NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <NavLink className='text-decoration-none me-2 text-white ' to='/login'>LogIn</NavLink>
                            </li>
                            </>
: <button>logout</button>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;*/
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-light.png'
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow">
                <div className="container-fluid">
                    <img className='logo' src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">



                            {
                                user ? <>
                                    <NavLink to='/' className="nav-item text-decoration-none me-4 text-white" >
                                        Home
                                    </NavLink>
                                    <NavLink to='/blog' className="nav-item text-decoration-none me-4 text-white">
                                        Blog
                                    </NavLink>

                                    <NavLink to='/manageitem' className="nav-item text-decoration-none me-4 text-white">
                                        ManageCars
                                    </NavLink>
                                    <NavLink to='/additem' className="nav-item text-decoration-none me-4 text-white">
                                        AddCars
                                    </NavLink>
                                    <NavLink to='/myitem' className="nav-item text-decoration-none me-4 text-white">
                                        MyCars
                                    </NavLink>
                                    <button onClick={() => signOut(auth)} className='btn btn-primary'>SignOut</button>
                                </>

                                    : <>
                                        <NavLink to='/' className="nav-item text-decoration-none me-4 text-white" >
                                            Home
                                        </NavLink>
                                        <NavLink to='/blog' className="nav-item text-decoration-none me-4 text-white">
                                            Blog
                                        </NavLink>
                                        <NavLink to='/login' className="nav-item text-decoration-none me-4 text-white">
                                            LogIn
                                        </NavLink>
                                    </>}

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;