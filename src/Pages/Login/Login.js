import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../Images/logo.png'

const Login = () => {

    const navigate = useNavigate();
    const { logIn, createUserGoogle, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('LogIn successfully')
                navigate('/')

            })
            .catch(err => {
                console.error('log in error', err)
            })

    }


    const handleGoogleSignIn = () => {
        createUserGoogle()
            .then(result => {
                toast.success('LogIn with google successfully')
                const user = result.user;
                console.log(user);
                navigate('/');
                handleUpdateProfile(user.displayName, user.photoURL);
                const phone = ''
                const password = ''
                const follower = 0
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
            institute: 'college student',
            follower
        }
        fetch('https://cipher-school-server.vercel.app/users', {
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
                    <form onSubmit={handleSubmit} className="card  max-w-md w-full px-2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />

                            </div>

                            <label className="flex justify-end ">
                                <Link className="text-orange-600  float-right no-underline">Forgot password?</Link>
                            </label>

                            <div className="form-control mt-2">
                                <button type='submit' className="btn border-0 bg-orange-500 hover:bg-orange-400">Login</button>
                            </div>
                            <div className=' text-center'>
                                <span>  Don't have an account? </span>
                                <Link to='/register' className=' text-orange-600 '> Register Now</Link>
                            </div>
                            <div className="divider my-2">OR</div>

                            <div className="form-control">
                                <button onClick={handleGoogleSignIn} className="btn  btn-outline ">SignIn With Google</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;