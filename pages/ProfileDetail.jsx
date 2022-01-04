import React from 'react';

const ProfileDetail = () => {
    return (
        <div className="flex flex-wrap md items-center h-screen mt-10">
            <div className="bg-white w-full md:w-1/2 h-screen">
                <div className="mx-32">
                    <h1 className="text-6xl font-bold mt-16">MASA</h1>

                    <div className="flex mt-16 font-light text-gray-500">
                        <div className="pr-4">
                            <span className="uppercase">Region</span>
                            <p className="text-2xl text-gray-900 font-semibold pt-2">Aichi</p>
                        </div>
                        <div className="pr-4 mx-4">
                            <span className="uppercase">JOB</span>
                            <p className="text-2xl text-gray-900 font-semibold pt-2">プログラマー</p>
                        </div>
                    </div>

                    <div className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm">
                        <p>20代は化学の研究に没頭し、メーカーにて技術開発職に従事していました。</p><br />
                        <p>そんなオッサン(30中盤)が2021年Web系企業のプログラマーに華麗に転身!!</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-3/6">
                <div className='mb-10'>
                    <h2 className='mb-4'>好きな・得意(?)なスキル</h2>
                    <h3>言語 : </h3>
                    <p className='mb-4'>PHP、Python、JavaScript</p>
                    <h3>フレームワーク・ライブラリ : </h3>
                    <p>CakePHP、Next.js、Django、React</p>
                </div>
                <img src="/profileimg.jpg" className="w-full" alt="profile" />
                <p>場所：岐阜県洞戸</p>
            </div>
        </div>
    );
};

export default ProfileDetail;