import React from 'react';
import img from '../../Images/user.png'

const UserCard = ({ user }) => {
    const { _id, photo, name, follower, institute } = user;
    return (
        <div className=' mx-auto'>
            <div className="card card-compact px-0 w-56 bg-base-100 shadow-xl">
                <div className=' flex justify-center items-center'>
                    {
                        photo ?
                            <img className=' w-16 h-16 mt-4 rounded-full' src={photo} alt="Shoes" />
                            :
                            <img className=' w-16 h-16 mt-4 rounded-full' src={img} alt="Shoes" />
                    }

                </div>
                <div className="card-body">
                    <h2 className="text-lg my-0 py-0 font-bold">{name}</h2>
                    <p className=''>{institute}</p>
                    <p className=''>Follower {follower}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm border-none w-full bg-orange-500">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;