import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
    const { user, logout, theme, setTheme } = useContext(AuthContext)

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("business")
        } else {
            setTheme("light")
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allEquipment">Shop</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
       {
        user && user?.email && <li><NavLink to="/addEquipment">Add Equipment</NavLink></li>
       }
       {
        user && user?.email && <li><NavLink to="/myEquipment">My Equipment List</NavLink></li>
       }
    </>
    return (
        <div
            className={`navbar px-10 bg-primary text-secondary mx-auto`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost px-1 lg:hidden">
                        <FaBars ></FaBars>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-btn-color text-white rounded-box z-10 mt-3 w-52 p-2 shadow gap-3">
                        {links}
                    </ul>
                </div>
                <Link to="/" className=" hover:cursor-pointer font-bold">GearUp Sports</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                   {links}
                </ul>
            </div>
            <div className="navbar-end items-center space-x-2">
                {
                    user ?
                        <div className='flex justify-center gap-3 items-center'>
                            <div>
                                <img id='kobi' className='w-10 h-10 rounded-full border' src={user && user.photoURL} />
                                <ReactTooltip
                                    anchorId='kobi'
                                    place='left'
                                    content={`${user && user.displayName}`}
                                />
                            </div>
                            <NavLink onClick={logout} to="/auth/login" className="btn btn-outline text-white border-secondary hover:bg-orange-500 hover:border-secondary ">Logout</NavLink>
                        </div>
                        :
                        <div className='flex justify-center gap-3 items-center'>
                            <NavLink to="/auth/login" className="btn btn-outline text-white border-secondary hover:bg-orange-500 hover:border-secondary ">Login</NavLink>
                        </div>
                }
                <div>
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={handleToggle} />
                        <FaSun className="swap-on h-8 w-8 fill-current"></FaSun>
                        {/* moon icon */}
                        <FaMoon className="swap-off h-8 w-8 fill-current" />
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;