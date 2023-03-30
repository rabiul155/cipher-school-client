import React, { useContext, useState } from 'react';
import './Banner.css'
import img from '../../Images/user.png'
import { FaPen } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider'


const Banner = () => {

    const { user } = useContext(AuthContext);
    const { photoURL } = user;

    return (
        <div>
            <div className='banner-bg'>
                <div className=' gradient-color'>
                    <div className=' flex justify-between items-center gap-4 py-[6px] mx-10'>
                        <div className=' flex justify-start items-center gap-4'>
                            <div className=' relative'>
                                {
                                    photoURL ?
                                        <img className=' h-[70px] w-[70px] rounded-full' src={photoURL} alt="" />
                                        :
                                        <img className=' h-[70px] w-[70px] rounded-full' src={img} alt="" />

                                }

                                <div className='flex justify-center items-center bg-black h-6 w-6 rounded-full absolute -bottom-[10px] left-6 '>
                                    <label htmlFor="my-modal-3"> <FaPen className=' text-white cursor-pointer' size={14} ></FaPen></label>
                                </div>
                            </div>
                            <div className=' block py-[7px]'>
                                <p className=' text-lg'> Hello,</p>
                                <h3 className=' font-bold text-2xl '>{user?.displayName}</h3>
                                <p>{user?.email}</p>
                            </div>
                        </div>
                        <div>
                            <div className=' text-lg'>
                                <p>
                                    <span> 0 </span>
                                    Followers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-base-200 mx-6 w-11/12 max-w-3xl">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-xl font-bold'>Profile Update</h3>
                    <div className='grid grid-cols-3'>
                        <div className='relative flex justify-center items-center'>
                            {
                                photoURL ?
                                    <img src={photoURL} className="h-40 w-40 mb-10 rounded-full" alt="" />
                                    :
                                    <img src={img} className="h-40 w-40 mb-10 rounded-full" alt="" />
                            }

                            <div type="file" className='flex justify-center items-center bg-black h-10 w-10 rounded-full absolute top-[184px] left-30 '>
                                <FaPen className=' text-white cursor-pointer' size={18} ></FaPen>
                            </div>

                        </div>
                        <div className=' col-span-2'>
                            <div className="form-control w-full mx-2 ">
                                <label className="label">
                                    <span className=" font-semibold">Name</span>
                                </label>
                                <div className=' '>
                                    <input type="text" placeholder="name" className="input  h-10 w-full " />
                                </div>
                            </div>
                            <div className="form-control w-full mx-2 ">
                                <label className="label">
                                    <span className=" font-semibold">Email Address</span>
                                </label>
                                <div className=' '>
                                    <input type="text" placeholder="email address" className="input  h-10 w-full " />
                                </div>
                            </div>
                            <div className="form-control w-full mx-2 ">
                                <label className="label">
                                    <span className=" font-semibold">Phone Number</span>
                                </label>
                                <div className=' '>
                                    <input type="text" placeholder="phone number" className="input  h-10 w-full " />
                                </div>
                            </div>

                            <div className=' flex justify-end mt-5'>

                                <button className='btn mx-5 btn-sm px-5 h-[10px] border-0 '> Cancel</button>
                                <button className='btn btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;