import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../Images/logo.png'

const Register = () => {


    const navigate = useNavigate()
    const { createUser, updateUserProfile, createUserGoogle } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.pass.value;
        const photoURL = '';
        const follower = 0;


        createUser(email, password)
            .then(result => {
                toast.success('Register account successfully')
                navigate('/')
                handleUpdateProfile(name, photoURL)
                handleSaveUser(name, email, photoURL, phone, password, follower);


            })
            .catch(err => {
                toast.error(err.message);
                console.error("create user error", err)
            })


    }

    const handleGoogleSignIn = () => {
        createUserGoogle()
            .then(result => {
                toast.success('SignUp with google successfully')
                const user = result.user;
                console.log(user);
                navigate('/');
                handleUpdateProfile(user.displayName, user.photoURL);
                const phone = ''
                const password = ''
                const follower = 0;
                handleSaveUser(user.displayName, user.email, user.photoURL, phone, password, follower)
            })
            .catch(e => {
                console.error('google sign in error', e)
            })
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {
                console.log('successfully updated user');
            })
            .catch(error => {
                console.error('update user error message', error)
            })

    }



    const handleSaveUser = (name, email, photo, phone, password, follower) => {
        const userProfile = {
            name,
            email,
            photo,
            phone,
            password,
            follower,
            institute: 'collge student'
        }
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div className='max-w-lg mx-auto'>
            <div className=" bg-base-100">
                <div className="hero-content flex-col ">
                    <div className=' text-center'>
                        <div className='flex justify-center items-center'>
                            <img className=' h-9 w-9' src={logo} alt="" />
                            <h3 className=' text-3xl m-3 font-bold'>
                                CipherSchools
                            </h3>
                        </div>

                        <div className=' text-center'>
                            <h3 className=' text-xl font-bold'>Create an account</h3>
                            <p className="py-1">
                                Please provide your email and password to signUp
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="card  max-w-md w-full px-2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control my-2">
                                {/* <label className="label">
                                    <span className="label-text">Name</span>
                                </label> */}
                                <input required name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control my-2">
                                {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}
                                <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control my-2">
                                {/* <label className="label">
                                    <span className="label-text">Phone</span>
                                </label> */}
                                <input required name='phone' type="text" placeholder="Phone number" className="input input-bordered" />
                            </div>
                            <div className="form-control my-2">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                <input required name='pass' type="password" placeholder="password" className="input input-bordered" />

                            </div>

                            <div className="form-control mt-4">
                                <button type='submit' className="btn border-0 bg-orange-500 hover:bg-orange-400">Register</button>
                            </div>
                            <div className=' text-center'>
                                <span>  Have an account? </span>
                                <Link to='/login' className=' text-orange-600 '> SignIn Now</Link>
                            </div>
                            <div className="divider my-2">OR</div>

                            <div className="form-control">
                                <button onClick={handleGoogleSignIn} className="btn  btn-outline ">SignUp With Google</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;