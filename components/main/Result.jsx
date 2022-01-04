import React from 'react';
import Link from 'next/link';

const Result = ({result}) => {
    return (
        <div className="border border-gray-200 p-6 rounded-lg mb-6">
        <Link href={`/results/${result.id}`}>
            <div className="p-4 cursor-pointer">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="result" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={result.image} />
                    <div className="flex-grow sm:pl-8">
                        <h2 className="title-font font-medium text-lg text-gray-900">
                            {result.title}
                        </h2>
                        <p className="mb-4">
                            {result.skill}
                        </p>
                        <p className="mb-4">
                            更新日：{result.created_at}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
        </div>
    );
};

export default Result;