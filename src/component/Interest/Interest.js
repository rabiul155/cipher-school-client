import React from 'react';

const Interest = () => {
    return (
        <div>

            <div className=' mx-10'>
                <div className='mx-2  pb-10 flex justify-between'>
                    <h4 className='uppercase text-xl font-bold'> Interests</h4>
                    <label htmlFor="my-modal" className='btn btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'>
                        Edit
                    </label>
                </div>
            </div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className=' grid grid-cols-2 gap-4'>
                        <button className=' btn w-full '>App Development</button>
                        <button className=' btn w-full'>Web Development</button>
                        <button className=' btn w-full'>Game Development</button>
                        <button className=' btn w-full'>Data Structure</button>
                        <button className=' btn w-full'>Programmig</button>
                        <button className=' btn w-full'>Machine</button>
                        <button className=' btn w-full'>Data Science</button>
                        <button className=' btn w-full'>Others</button>

                    </div>
                    <div className=' flex justify-end mt-5'>
                        <label htmlFor="my-modal" className='btn mx-5 btn-sm px-5 h-[10px] border-0 '> Cancel</label>
                        <label htmlFor="my-modal" className='btn w-[100px] btn-sm px-5 h-[10px] border-0 bg-orange-500 hover:bg-orange-400'>Save</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interest;