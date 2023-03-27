import React from 'react';
import Banner from '../../component/Banner/Banner';
import Interest from '../../component/Interest/Interest';
import OnTheWeb from '../../component/OnTheWeb/OnTheWeb';
import './Profile.css'

const Profile = () => {
    return (
        <div className=' bg-base-200'>
            <Banner></Banner>

            {/* about me section  */}

            <div className='mx-10'>
                <div className='mx-2 mt-4 mb-2 flex justify-between'>
                    <h4 className='uppercase text-xl font-bold'> About Me</h4>
                    <button className='btn btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'> Edit</button>
                </div>
                <textarea className="textarea m-2 mb-6 h-24 w-full" placeholder="Bio"></textarea>
                <hr />
            </div>


            {/* on the web section */}

            <OnTheWeb></OnTheWeb>

            {/* professional info    */}

            <div className=' mx-10'>
                <div className='mx-2 flex justify-between'>
                    <h4 className='uppercase text-xl font-bold'> PROFESSIONAL INFORMATION</h4>
                    <button className='btn btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'> Edit</button>
                </div>
                <div className=' flex justify-between  mb-6'>
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Highest Education</span>
                        </label>
                        <div className=' '>
                            <select className="select  w-full  h-6 select-field">
                                <option >Primary</option>
                                <option>Secondary</option>
                                <option>Higher Secondary</option>
                                <option>Graduate</option>
                                <option>Post Graduate</option>

                            </select>
                        </div>
                    </div>

                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">What do you do currently?</span>
                        </label>
                        <div className=' '>
                            <select className="select  w-full py-2 h-3 select-field" >
                                <option>Schooling</option>
                                <option>College Student</option>
                                <option>Teaching</option>
                                <option>Job</option>
                                <option>Freelancing</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            {/* password section  */}

            <section className='my-6 mx-10'>
                <div className=' mb-6'>
                    <div className='mx-2 flex justify-between'>
                        <h4 className='uppercase text-xl font-bold'>Password & sequrity</h4>
                        <button className='btn btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'> Change</button>
                    </div>
                    <div className='  my-2'>
                        <div className="form-control w-full mx-2 ">
                            <label className="label">
                                <span className=" font-semibold">Password</span>
                            </label>
                            <div className=' '>
                                <input type="text" placeholder="*******************" className="input h-10 w-full " />

                            </div>

                        </div>
                    </div>
                </div>
                <hr />
            </section>

            <Interest></Interest>

        </div>
    );
};

export default Profile;