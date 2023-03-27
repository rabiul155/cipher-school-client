import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'

const Login = () => {

    return (

        <div className='max-w-lg mx-auto'>
            <div className=" bg-base-100">
                <div className="hero-content flex-col ">
                    <div className=' text-center'>
                        <div className=' flex justify-center items-center'>
                            <img className=' h-9 w-9' src={logo} alt="" />
                            <h3 className=' text-3xl m-3 font-bold'>
                                CipherSchools
                            </h3>
                        </div>

                        <div className=' text-center'>
                            <h3 className=' text-xl font-bold'> Hey, Welcome!</h3>
                            <p className="py-1">
                                Please provide your email and password to signIn
                            </p>
                        </div>
                    </div>
                    <div className="card  max-w-md w-full px-2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />

                            </div>

                            <label className="flex justify-end ">
                                <Link className="text-orange-600  float-right no-underline">Forgot password?</Link>
                            </label>

                            <div className="form-control mt-2">
                                <button className="btn border-0 bg-orange-500 hover:bg-orange-400">Login</button>
                            </div>
                            <div className=' text-center'>
                                <span>  Don't have an account? </span>
                                <Link to='/register' className=' text-orange-600 '> Register Now</Link>
                            </div>
                            <div className="divider my-2">OR</div>

                            <div className="form-control">
                                <button className="btn  btn-outline ">SignIn With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;