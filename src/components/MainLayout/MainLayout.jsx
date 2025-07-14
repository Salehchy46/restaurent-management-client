import React, { useContext } from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import ThemeContext from '../contexts/ThemeContext/ThemeContext';

const MainLayout = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className='max-w-7xl mx-auto'>
            <Header style={{
                backgroundColor: theme === 'light' ? '#f2f2f2' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                padding: '20px',
                textAlign: 'center',
            }}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;