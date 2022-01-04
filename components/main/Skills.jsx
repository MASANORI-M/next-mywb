import React from 'react';
import Link from 'next/link';
import { Circle } from 'react-circle';

import { requestStates } from '../../constants';
import { useSkills } from '../../customHooks/useSkills';

const Skills = () => {
    // const [languageList, setLanguageList] = useState([]);
    const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();
        
    return(
        <div className='flex justify-center flex-col items-center mb-10 mt-10'>
            <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">My Skill</h2>
                <div className="w-80 h-1 bg-indigo-300 rounded mt-10 mb-10"></div>
                <div className="flex flex-wrap text-center">
                    {
                        fetchRequestState === requestStates.loading && (
                            <p className="description">取得中...</p>
                        )
                    }
                    {
                        fetchRequestState === requestStates.success && (
                            sortedLanguageList().map((item, index) => (
                                <div className="mx-6 my-4" key={item.language}>
                                    <p className="mb-4 text-sm"><strong>{item.language}</strong></p>
                                    <Circle
                                        animate
                                        progress={converseCountToPercentage(item.count)}
                                    />
                                </div>
                            ))
                        )
                    }
                    {
                        fetchRequestState === requestStates.error && (
                            <p className="description">エラーが発生しました</p>
                        )
                    }
                </div>
                <Link href="https://github.com/MASANORI-M">
                    <button className="flex mx-auto mt-8 text-white bg-indigo-400 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        GitHUb
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Skills;