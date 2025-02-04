import React, { useContext } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className='py-5'>
            <header>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </header>
        </div>
    );
};

export default HomeLayout;