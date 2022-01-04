import React from 'react';

import { Header } from './index';

const Layout = (props) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='sticky top-0 z-50'>
                <Header />
            </div>
            <main className='container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg'>
                {props.children}
            </main>
            <footer className='flex items-center justify-center w-full h-20 text-sm border-t'>
                © 2022 M-MASA
            </footer>
        </div>
    );
};

export default Layout;