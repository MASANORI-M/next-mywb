import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-center flex-col items-center mb-10 mt-10">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Contactspan<span className='text-sm'>(未実装)</span></h2>
            <div className="w-80 h-1 bg-indigo-300 rounded mt-10 mb-6"></div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0">
                <p className="leading-relaxed mb-5 text-gray-600 text-center">お問い合わせはこちら</p>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="flex mx-auto mt-8 text-white bg-indigo-400 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Message Send
                </button>
            </div>
        </div>
    );
};

export default Contact;