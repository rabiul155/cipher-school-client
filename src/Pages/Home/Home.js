import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserCard from '../../component/UserCard/UserCard';

const Home = () => {

    const users = useLoaderData()

    // const { user } = useState()
    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data);
    //         })
    // }, [user])

    console.log(users);

    return (
        <div className='grid grid-cols-5 gap-y-6'>
            {
                users?.map(user => <UserCard
                    key={user._id}
                    user={user}
                ></UserCard>)
            }

        </div>
    );
};

export default Home;