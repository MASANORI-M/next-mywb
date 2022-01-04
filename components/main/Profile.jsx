import React from 'react';
import Link from 'next/link';

const Profile = () => {
    return (
        <div className='flex justify-center flex-col items-center mb-10 mt-10'>
            <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">My Profile</h2>
                <div className="w-80 h-1 bg-indigo-300 rounded mt-10 mb-10"></div>
                <p className="text-base mb-4">
                    名前 ： MASA
                </p>
                <p className="text-base mb-4">
                    略歴 ：化学好きのプログラマー
                </p>
                <p className="text-base mb-4">
                    好きな・得意(?)な言語 ：PHP、Python、JavaScript 
                </p>
                <Link href="/ProfileDetail">
                    <button className="flex mx-auto mt-6 text-white bg-indigo-400 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;