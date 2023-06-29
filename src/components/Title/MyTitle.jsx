import React from 'react';

const MyTitle = ({title,subtitle}) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-slate-700 text-3xl '>{title}</h2>
            <h5 className='font-semibold'>'{subtitle}'</h5>
            <hr className="border-dashed p-2 w-72 border-orange-400 my-4"/>

            
        </div>
    );
};

export default MyTitle;