import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Banner from '../../component/Banner/Banner';
import Interest from '../../component/Interest/Interest';
import OnTheWeb from '../../component/OnTheWeb/OnTheWeb';
import { AuthContext } from '../../context/AuthProvider';
import './Profile.css'

const Profile = () => {

    const { user } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true)
    const [userData, setUserData] = useState({})
    const [isDisable1, setIsDsilable1] = useState(true)
    const [isDisable2, setIsDsilable2] = useState(true)
    const [about, setAbout] = useState()
    const [education, setEducation] = useState()
    const [institute, setInstitute] = useState()
    const [btnName1, setbtnName1] = useState('EDIT')
    const [btnName2, setbtnName2] = useState('EDIT')
    const [linkedIn, setLinkedIn] = useState()
    const [gitHub, setGithub] = useState()
    const [facebook, setfacebook] = useState()
    const [twitter, setTwitter] = useState()
    const [instagram, setInstagram] = useState()
    const [website, setWebsite] = useState()

    console.log(education, institute);

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://cipher-school-server.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserData(data)
                setAbout(data.about)
                setEducation(data.education)
                setInstitute(data.institute)
                setLinkedIn(data.linkedIn)
                setGithub(data.gitHub)
                setfacebook(data.facebook)
                setInstagram(data.instagram)
                setTwitter(data.twitter)
                setWebsite(data.website)
            })

        setIsLoading(false)

    }, [user])




    const handleEditBtn1 = (event) => {
        const name = event.target.innerText;

        if (name === 'EDIT') {
            console.log(about);
            setbtnName1("SAVE")
            setIsDsilable1(false)
        }
        else {
            setbtnName1("EDIT")
            setIsDsilable1(true)
            const userAbout = {
                about: about
            }
            console.log(userAbout);

            fetch(`https://cipher-school-server.vercel.app/userAbout?email=${user?.email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userAbout)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('About updated')
                })


        }
    }

    const handleEditBtn2 = (event) => {
        const name = event.target.innerText;

        if (name === 'EDIT') {

            setbtnName2("SAVE")
            setIsDsilable2(false)
        }
        else {
            setbtnName2("EDIT")
            setIsDsilable2(true)
            const userDetails = {
                education: education,
                institute: institute
            }


            fetch(`https://cipher-school-server.vercel.app/userDetails?email=${user?.email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Education Details Update')
                })


        }
    }


    if (isLoading) {
        return <div>Loading.....</div>
    }


    return (


        <div className=' bg-base-200'>

            <Banner userData={userData}></Banner>

            {/* about me section  */}

            <div className='mx-10'>
                <div className='mx-2 mt-4 mb-2 flex justify-between'>
                    <h4 className='uppercase text-xl font-bold'> About Me</h4>
                    <button onClick={handleEditBtn1} className='btn btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'>{btnName1}</button>
                </div>
                <div className=' mr-2'>
                    <textarea defaultValue={userData.about} onBlur={(e) => setAbout(e.target.value)} name='about' disabled={isDisable1} className="textarea bg-base-100 disabled-bg mb-6 h-24 w-full" placeholder="Add something about you"></textarea>
                </div>
                <hr />
            </div>



            {/* on the web section */}

            <OnTheWeb
                linkedIn={linkedIn}
                gitHub={gitHub}
                facebook={facebook}
                twitter={twitter}
                instagram={instagram}
                website={website}
                setLinkedIn={setLinkedIn}
                setGithub={setGithub}
                setfacebook={setfacebook}
                setTwitter={setTwitter}
                setInstagram={setInstagram}
                setWebsite={setWebsite}
            ></OnTheWeb>

            {/* professional info    */}

            <div className=' mx-10'>
                <div className='mx-2 flex justify-between'>
                    <h4 className='uppercase text-xl font-bold'> PROFESSIONAL INFORMATION</h4>
                    <button onClick={handleEditBtn2} className='btn btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'>{btnName2}</button>
                </div>
                <div className=' flex justify-between  mb-6'>
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">Highest Education</span>
                        </label>
                        <div className=' '>
                            <select disabled={isDisable2} onChange={(e) => setEducation(e.target.value)} className="select disabled-bg w-full h-5 select-field">
                                <option selected={education === 'Primary' ? true : false}>Primary</option>
                                <option selected={education === 'Secondary' ? true : false}>Secondary</option>
                                <option selected={education === 'Higher Secondary' ? true : false}>Higher Secondary</option>
                                <option selected={education === 'Graduate' ? true : false}>Graduate</option>
                                <option selected={education === 'Post Graduate' ? true : false}>Post Graduate</option>

                            </select>
                        </div>
                    </div>



                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className=" font-semibold">What do you do currently?</span>
                        </label>
                        <div className=' '>
                            <select disabled={isDisable2} onChange={(e) => setInstitute(e.target.value)} className="select disabled-bg w-full py-2 h-3 select-field" >
                                <option selected={institute === "Schooling" ? true : false}>Schooling</option>
                                <option selected={institute === "College Student" ? true : false}>College Student</option>
                                <option selected={institute === "Teaching" ? true : false}>Teaching</option>
                                <option selected={institute === "Job" ? true : false}>Job</option>
                                <option selected={institute === "Freelancing" ? true : false}>Freelancing</option>
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
                            <div className=' mr-4'>
                                <input type="text" placeholder="*******************" className="input  h-10 w-full " />
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