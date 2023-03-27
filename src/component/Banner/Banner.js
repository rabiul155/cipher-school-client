import React from 'react';
import './Banner.css'
import img from '../../Images/Formal Img.png'
import { FaPen } from "react-icons/fa";


const Banner = () => {
    return (
        <div>
            <div className='banner-bg'>
                <div className=' gradient-color'>
                    <div className=' flex justify-between items-center gap-4 py-[6px] mx-10'>
                        <div className=' flex justify-start items-center gap-4'>
                            <div className=' relative'>
                                <img className=' h-[70px] w-[70px] rounded-full' src={img} alt="" />
                                <div className='flex justify-center items-center bg-black h-6 w-6 rounded-full absolute -bottom-[10px] left-6 '>
                                    <FaPen className='text-white ' size={14} ></FaPen>
                                </div>
                            </div>
                            <div className=' block py-[7px]'>
                                <p className=' text-lg'> Hello,</p>
                                <h3 className=' font-bold text-2xl '>Rabiul Islam</h3>
                                <p>rabiul.islam4715@gmail.com</p>
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

        </div>
    );
};

export default Banner;