import React from 'react';
import Image from 'next/image';

const Top = () => {
    return (
        <div className='mt-10 mb-10 p-3 border rounded'>
            <Image
            className='object-cover rounded'
            src="/home.jpg"
            alt='top'
            width={1280}
            height={500}
            />
        </div>

        // <div className="h-screen flex items-center relative w-screen">
        //     <div  className="bg-black z-0 bg-opacity-25 w-screen" >
        //         <Image layout="fill" src="/home.jpg" alt="" />
        //         <div className="bg-black absolute inset-0 opacity-40"></div>
        //     </div>
        //     <div className="container relative">
        //         <div className="grid py-40 lg:grid-cols-2 items-center">
        //             <div>
        //                 <p className="font-bold text-white text-4xl tracking-wider leading-loose">
        //                     リニューアルMy サイト
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Top;