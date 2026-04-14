import React from 'react';
import { FaHome, FaRegClock,  } from 'react-icons/fa';
import { FaTimeline } from 'react-icons/fa6';
import { IoIosStats } from 'react-icons/io';
import { RiHome4Line } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <NavLink to="/" className={({ isActive }) =>
            `btn ${isActive ? 'bg-green-500 text-white' : ''}`
        }>
            <RiHome4Line /> Home
        </NavLink>

        <NavLink to="/timeline" className={({ isActive }) =>
            `btn ${isActive ? 'bg-green-500 text-white' : ''}`
        }>
            <FaRegClock /> Timeline
        </NavLink>

        <NavLink to="/stats" className={({ isActive }) =>
            `btn ${isActive ? 'bg-green-500 text-white' : ''}`
        }>
            <IoIosStats /> Stats
        </NavLink>
    </>

    return (
        <div className="min-w-full bg-base-100 shadow-sm ">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                            {links}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end hidden lg:flex gap-5">
                    {links}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
