import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

const OnTheWeb = () => {
    return (

        <div className='py-6 mx-10'>
            <div className='mx-2 flex justify-between'>
                <h4 className='uppercase text-xl font-bold'>On The Web</h4>
                <button className='btn btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'> Edit</button>
            </div>

            <div className=' mb-6'>

                <div className=' flex justify-between my-2'>
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Linkedin</span>
                        </label>
                        <div className=' relative'>
                            <input type="text" placeholder="Linkedin" className="input px-12 h-10 w-full " />
                            <FaLinkedinIn className=' absolute top-[10px] left-4' size={22}></FaLinkedinIn>
                        </div>
                    </div>

                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Github</span>
                        </label>
                        <div className=' relative'>
                            <input type="text" placeholder="Github" className="input px-12 h-10 w-full " />
                            <FaGithub className=' absolute top-[10px] left-4' size={22}></FaGithub>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-between my-2'>
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Facebook</span>
                        </label>
                        <div className=' relative'>
                            <input type="text" placeholder="Facebook" className="input px-12 h-10 w-full " />
                            <FaFacebook className=' absolute top-[10px] left-4' size={22}></FaFacebook>
                        </div>
                    </div>

                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Twitter</span>
                        </label>
                        <div className=' relative'>
                            <input type="text" placeholder="Twitter" className="input px-12 h-10 w-full " />
                            <FaTwitter className=' absolute top-[10px] left-4' size={22}></FaTwitter>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-between my-2'>
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Instagram</span>
                        </label>
                        <div className=' relative'>
                            <input type="text" placeholder="Instagram" className="input px-12 h-10 w-full " />
                            <FaInstagram className=' absolute top-[10px] left-4' size={22}></FaInstagram>
                        </div>
                    </div>

                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Your website</span>
                        </label>
                        <div className=' relative'>
                            <input type="text" placeholder="Your website" className="input px-12 h-10 w-full " />
                            <FaGlobe className=' absolute top-[10px] left-4' size={22}></FaGlobe>
                        </div>
                    </div>
                </div>


            </div>

            <hr />
        </div>

    );
};

export default OnTheWeb;