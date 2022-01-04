import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Top } from '../components/layout';
import { Post, Profile, Result, Skills, Contact } from '../components/main';
import { getAllPostsData } from '../lib/posts';
import { getAllResultsData } from '../lib/results';

export default function Home({posts, results}) {
  return (
    <>
      <div>
        <Head>
          <title>MOLPRO</title>
        </Head>
        <span id="head"><Top /></span>
        <Profile />
        <div className="border-dashed border-4 border-gray-500 w-240 my-28"></div>
        <div className='flex justify-center flex-col items-center mb-10 mt-10'>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">My News(不定期)</h2>
            <div className="w-80 h-1 bg-indigo-300 rounded mt-10 mb-10"></div>  
          </div>
        </div>
        <div className='flex flex-wrap -m-4 mb-5'>
          {posts && posts.map((post) => 
            <Post key={post.id} post={post} />
          )}
        </div>
        <div className="border-dashed border-4 border-gray-500 w-240 my-28"></div>
        <div className='flex justify-center flex-col items-center mb-10 mt-10'>
          <div id="achievement" className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">My Achievement</h2>
            <div className="w-80 h-1 bg-indigo-300 rounded mt-10 mb-10"></div>  
          </div>
        </div>
        <div className='-m-4 mb-5'>
          {results && results.map((result) => 
            <Result key={result.id} result={result} />
          )}
        </div>
        <div className="border-dashed border-4 border-gray-500 w-240 my-28"></div>
        <Skills />
        <div id="contact" className="border-dashed border-4 border-gray-500 w-240 my-28"></div>
        <Contact />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  const results = await getAllResultsData();
  return {
    props: {posts, results},
    revalidate: 3,
  };
}