import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getAllResultsIds, getResultData } from '../../lib/results';

const ResultData = ({result}) => {
    const router = useRouter();

    if(router.isFallback || !result) {
        return <div>Loading...</div>;  
    }

    return (
        <div className="space-y-5 w-full mt-10">
            <div className="flex justify-center flex-col items-center mb-5">
                <h1 className="text-3xl mb-3 font-bold">{result.title}</h1>
                <p className="mb-3">{result.created_at}</p>
                <div className="border w-14"></div>
            </div>
            <p className="whitespace-pre-wrap">{result.content}</p>
            <p className="whitespace-pre-wrap">{result.skill}</p>
            <div>
                <Link href="https://spn-app-fed9b.web.app/signin">
                    <button className='relative bg-blue-400 text-white p-4 px-12 rounded text-2xl font-bold overflow-hidden mt-10'>
                        お試しはコチラ
                        <div className="ribbon bg-red-500 text-sm whitespace-no-wrap px-4">React</div>
                    </button>
                </Link>
            </div>
        </div> 
    );
};

export default ResultData;

export async function getStaticPaths() {
    const paths = await getAllResultsIds();
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({params}) {
    const result = await getResultData(params.id);
    return {
        props: {
            result,
        },
        revalidate: 3,
    };
}