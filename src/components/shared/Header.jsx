import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const navLinks = <>
        <li className='hover:border-b-2'><NavLink className='hover:bg-white' to='/'>Home</NavLink></li>
        <li className='hover:border-b-2'><NavLink className='hover:bg-white' to='/menu'>Menu</NavLink></li>
        <li className='hover:border-b-2'><NavLink className='hover:bg-white' to='/'>Home</NavLink></li>
        <li className='hover:border-b-2'><NavLink className='hover:bg-white' to='/'>Home</NavLink></li>
    </>

    return (
        <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <img src="https://i.ibb.co/XkZkv2kw/download.webp" alt="logo" className='w-20' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Header;