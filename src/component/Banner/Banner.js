import React, { useContext, useState } from 'react';
import './Banner.css'
import img from '../../Images/user.png'
import { FaPen } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';


const Banner = ({ userData }) => {

    const { user } = useContext(AuthContext);
    const [modal, setModal] = useState(false)
    const imageHostingKey = '60a0534fb81af8024326073b2526de82';

    const { register, handleSubmit } = useForm();

    const handleFormSubmit = (data) => {
        console.log(data);
        const photo = data.photo[0];
        console.log(photo);
        const formData = new FormData()
        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData?.success) {
                    const profile = {
                        name: data.name,
                        photo: imgData.data.url,
                        phone: data.phone
                    }

                    fetch(`http://localhost:5000/updateProfile?email=${user.email}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(profile)


                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success('Profile updated Please reload page')
                            setModal(false)
                        })



                }
            })


    }


    return (
        <div>
            <div className='banner-bg'>
                <div className=' gradient-color'>
                    <div className=' flex justify-between items-center gap-4 py-[6px] mx-10'>
                        <div className=' flex justify-start items-center gap-4'>
                            <div className=' relative'>
                                {
                                    userData?.photo ?
                                        <img className=' h-[70px] w-[70px] rounded-full' src={userData?.photo} alt="" />
                                        :
                                        <img className=' h-[70px] w-[70px] rounded-full' src={img} alt="" />

                                }

                                <div className='flex justify-center items-center bg-black h-6 w-6 rounded-full absolute -bottom-[10px] left-6 '>
                                    <label onClick={() => setModal(true)} htmlFor="my-modal-3"> <FaPen className=' text-white cursor-pointer' size={14} ></FaPen></label>
                                </div>
                            </div>
                            <div className=' block py-[7px]'>
                                <p className=' text-lg'> Hello,</p>
                                <h3 className=' font-bold text-2xl '>{userData?.name}</h3>
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


            {
                modal &&
                <div>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative bg-base-200 mx-6 w-11/12 max-w-3xl">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className='text-xl font-bold'>Profile Update</h3>
                            <div className='grid grid-cols-3'>
                                <div className=' flex justify-center items-center'>
                                    {
                                        userData?.photo ?
                                            <img src={userData?.photo} className="h-40 w-40 mb-10 rounded-full" alt="" />
                                            :
                                            <img src={img} className="h-40 w-40 mb-10 rounded-full" alt="" />
                                    }


                                </div>
                                <form onSubmit={handleSubmit(handleFormSubmit)} className=' col-span-2'>
                                    <div className="form-control w-full mx-2 ">
                                        <label className="label">
                                            <span className=" font-semibold">Name</span>
                                        </label>
                                        <div className=' '>
                                            <input
                                                {...register('name')}
                                                defaultValue={userData?.name} type="text" placeholder="name" className="input  h-10 w-full " />
                                        </div>
                                    </div>
                                    <div className="form-control w-full mx-2 ">
                                        <label className="label">
                                            <span className=" font-semibold">Email Address</span>
                                        </label>
                                        <div className=' '>
                                            <input

                                                defaultValue={user?.email} type="text" placeholder="email address" className="input  h-10 w-full " />
                                        </div>
                                    </div>
                                    <div className="form-control w-full mx-2 ">
                                        <label className="label">
                                            <span className=" font-semibold">Photo</span>
                                        </label>
                                        <div className=' '>
                                            <input
                                                {...register('photo')}
                                                type="file" className="file-input w-full " />
                                        </div>
                                    </div>
                                    <div className="form-control w-full mx-2 ">
                                        <label className="label">
                                            <span className=" font-semibold">Phone Number</span>
                                        </label>
                                        <div className=' '>
                                            <input
                                                {...register('phone')}
                                                defaultValue={userData?.phone} type="text" placeholder="phone number" className="input  h-10 w-full " />
                                        </div>
                                    </div>

                                    <div className=' flex justify-end mt-5'>

                                        <label htmlFor="my-modal-3" className='btn mx-5 btn-sm px-5 h-[10px] border-0 '> Cancel</label>
                                        <button type='submit' className='btn btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            }



        </div>
    );
};

export default Banner;