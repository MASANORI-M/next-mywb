import React from 'react';
import { useRouter } from 'next/router';

import { getAllPostsIds, getPostData } from '../../lib/posts';

const PostData = ({post}) => {
    const router = useRouter();

    if(router.isFallback || !post) {
        return <div>...Loading...</div>;
    }

    return (
        <div className="mt-10 mb-80 bg-blue-400 border-x-8 border-y-8">
            <div className="lg:grid lg:grid-cols-2 mx-10">
                <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                    <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                        <span className="block">{post.title}</span>
                    </h2>
                    <p className="text-gray-200 mt-5 text-xl">
                        {post.content}
                    </p>
                </div>
                <div className="ml-10 lg:relative lg:mt-16 border-double">
                    <img className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md" src={post.image} alt="Woman workcation on the beach" />
                </div>
            </div>
        </div>

        // <div classNameNameName="space-y-5 w-full mt-10">
        //     <div classNameName="flex justify-center flex-col items-center mb-5">
        //         <h1 classNameName="text-3xl mb-3 font-bold">{post.title}</h1>
        //         <p classNameName="mb-3">{post.created_at}</p>
        //         <div classNameName="border w-14"></div>
        //     </div>
        //     <p classNameName="whitespace-pre-wrap">{post.content}</p>
        // </div> 
    );
};

export default PostData;

// Post一覧idを取得
export async function getStaticPaths() {
    const paths = await getAllPostsIds();
    return {
        paths,
        fallback: true,
    };
}

// Post詳細データ取得
export async function getStaticProps({params}) {
    const post = await getPostData(params.id);
    return {
        props: {
            post,
        },
        revalidate: 3,
    };
}