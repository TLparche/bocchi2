"use client";
import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';

const NavBar = () => {
    const [menuStat, setMenuStat] = useState(false);

    const menuChange = () => {
        setMenuStat(!menuStat);
    };

    return (
        <div>
            <div className="top-0 left-0 right-0 w-full bg-pink-200 h-20 fixed z-50">
                <div className="mx-8 flex items-center h-full justify-between z-40">
                    {menuStat ? (
                        <div></div>
                    ) : (
                        <Link href="/">
                            <img src="kessoku.png" className="w-28 h-16" alt="Logo" />
                        </Link>
                    )}

                    {menuStat ? (
                        <IoClose className="w-16 h-16" onClick={menuChange} />
                    ) : (
                        <IoMenu className="w-16 h-16" onClick={menuChange} />
                    )}
                </div>
            </div>

            <div
                className={`top-0 left-0 right-0 w-full h-screen bg-pink-200 z-40 fixed bg-opacity-60 transform ${
                    menuStat ? 'translate-y-0' : '-translate-y-full'
                } transition-transform duration-500 ease-in-out`}
            >
                <div className="h-full w-full items-center justify-center flex fixed">
                    <img src="kessoku.png" className="w-80 h-40 fixed" alt="Logo" />
                    <ul className="grid grid-cols-2 w-full h-2/3 px-12">
                        <li className="flex items-center justify-center w-full h-full text-5xl font-bold">
                            Album
                        </li>
                        <li className="flex items-center justify-center w-full h-full text-5xl font-bold">
                            Member
                        </li>
                        <li className="flex items-center justify-center w-full h-full text-5xl font-bold">
                            About
                        </li>
                        <li className="flex items-center justify-center w-full h-full text-5xl font-bold">
                            Apply
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
