import React from 'react';
import Link from 'next/link';
import {Link as Scroll} from "react-scroll"

const Header = () => {
    return (
        <header className=" text-white w-full pt-1 pb-1 pr-8 pl-8 bg-blue-400 top-0 flexed flex items-center">
            <h1 className="my-0 mx-0 px-0 py-0 text-xl cursor-pointer">
                <Scroll 
                    to="head" 
                    smooth={true}
                    duration={200} 
                    offset={-120}
                >
                    MOLPRO
                </Scroll>
            </h1>
            <nav className="ml-auto">
                <ul className="flex">
                    <li className="my-5 ml-14 mr-0 text-lg text-gray-600">
                        <Link href="/ProfileDetail">
                            <a>
                                PROFILE
                            </a>
                        </Link>
                    </li>
                    <li className="my-5 ml-14 mr-0 text-lg text-gray-600 cursor-pointer">
                        <Scroll 
                            to="achievement" 
                            smooth={true}
                            duration={500} 
                            offset={-220}
                        >
                            ACHIEVEMENT
                        </Scroll>
                    </li>
                    <li className="my-5 ml-14 mr-0 text-lg text-gray-600 cursor-pointer">
                        <Scroll 
                            to="contact" 
                            smooth={true}
                            duration={500} 
                            offset={-180}
                        >
                            CONTACT
                        </Scroll>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;