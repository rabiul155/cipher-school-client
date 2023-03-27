import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'

const Register = () => {
    return (
        <div className='max-w-lg mx-auto'>

            <div className=" bg-base-200">
                <div className="hero-content flex-col ">
                    <div className=' text-center'>
                        <div className='m-1 flex justify-center items-center'>
                            <img className=' h-9 w-9' src={logo} alt="" />
                            <h3 className=' text-3xl m-3 font-bold'>
                                CipherSchools
                            </h3>
                        </div>

                        <div className=' text-center'>
                            <h3 className=' text-xl font-bold'>Create an account</h3>
                            <p className="py-3">
                                Please provide your email and password to signUp
                            </p>
                        </div>
                    </div>
                    <div className="card  max-w-md w-full px-2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control my-2">
                                {/* <label className="label">
                                    <span className="label-text">Name</span>
                                </label> */}
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control my-2">
                                {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control my-2">
                                {/* <label className="label">
                                    <span className="label-text">Phone</span>
                                </label> */}
                                <input type="text" placeholder="Phone number" className="input input-bordered" />
                            </div>
                            <div className="form-control my-2">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                <input type="text" placeholder="password" className="input input-bordered" />

                            </div>



                            <div className="form-control mt-4">
                                <button className="btn border-0 bg-orange-500 hover:bg-orange-400">Register</button>
                            </div>
                            <div className=' text-center'>
                                <span>  Have an account? </span>
                                <Link to='/login' className=' text-orange-600 '> SignIn Now</Link>
                            </div>
                            <div className="divider my-2">OR</div>

                            <div className="form-control">
                                <button className="btn  btn-outline ">SignUp With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;