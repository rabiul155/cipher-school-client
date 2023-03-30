import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';

const OnTheWeb = ({ linkedIn, gitHub, facebook, twitter, instagram, website,
    setLinkedIn, setGithub, setfacebook, setInstagram, setTwitter, setWebsite }) => {


    const { user } = useContext(AuthContext);
    const [btnName, setBtnName] = useState('EDIT')
    const [isDisable, setIsDsilable] = useState(true)




    const handleEditBtn = (event) => {
        const name = event.target.innerText;

        if (name === 'EDIT') {
            setBtnName("SAVE")
            setIsDsilable(false)

        }
        else {
            setBtnName("EDIT")
            setIsDsilable(true)

            const websites = {
                linkedIn: linkedIn,
                gitHub: gitHub,
                facebook: facebook,
                twitter: twitter,
                instagram: instagram,
                website: website
            }


            fetch(`http://localhost:5000/updateWebsites?email=${user?.email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(websites)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Websites updated')
                })



        }

    }

    return (

        <div className='py-6 mx-10'>
            <div className='mx-2 flex justify-between'>
                <h4 className='uppercase text-xl font-bold'>On The Web</h4>
                <button onClick={handleEditBtn} className='btn btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'>{btnName}</button>
            </div>

            <div className=' mb-6'>

                <div className=' flex justify-between my-2'>
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Linkedin</span>
                        </label>
                        <div className=' relative'>
                            <input defaultValue={linkedIn} onBlur={(e) => setLinkedIn(e.target.value)} disabled={isDisable} type="text" placeholder="Linkedin" className=" input px-12 h-10 w-full disabled-bg" />
                            <FaLinkedinIn className=' absolute top-[10px] left-4' size={22}></FaLinkedinIn>
                        </div>
                    </div>

                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Github</span>
                        </label>
                        <div className=' relative'>
                            <input defaultValue={gitHub} onBlur={(e) => setGithub(e.target.value)} disabled={isDisable} type="text" placeholder="Github" className="input px-12 h-10 w-full disabled-bg" />
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
                            <input defaultValue={facebook} onBlur={(e) => setfacebook(e.target.value)} disabled={isDisable} type="text" placeholder="Facebook" className="input px-12 h-10 w-full disabled-bg" />
                            <FaFacebook className=' absolute top-[10px] left-4' size={22}></FaFacebook>
                        </div>
                    </div>

                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Twitter</span>
                        </label>
                        <div className=' relative'>
                            <input defaultValue={twitter} onBlur={(e) => setTwitter(e.target.value)} disabled={isDisable} type="text" placeholder="Twitter" className="input px-12 h-10 w-full disabled-bg" />
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
                            <input defaultValue={instagram} onBlur={(e) => setInstagram(e.target.value)} disabled={isDisable} type="text" placeholder="Instagram" className="input px-12 h-10 w-full disabled-bg" />
                            <FaInstagram className=' absolute top-[10px] left-4' size={22}></FaInstagram>
                        </div>
                    </div>

                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Your website</span>
                        </label>
                        <div className=' relative'>
                            <input defaultValue={website} onBlur={(e) => setWebsite(e.target.value)} disabled={isDisable} type="text" placeholder="Your website" className="input px-12 h-10 w-full disabled-bg" />
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