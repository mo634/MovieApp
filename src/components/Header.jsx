"use client"
import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import ModeSwitch from './ModeSwitch';
import Link from 'next/link';
function Header() {
    return (
        <header className='dark:bg-gray-700 bg-secondary-color flex justify-between items-center p-[2%]'>

            <div className=" flex gap-4">
                <MenuItem title="Home" Icon={AiFillHome} address="/" />
                <MenuItem title="about" Icon={BsFillInfoCircleFill} address="/about" />
            </div>



            <div className="text-3xl flex gap-4 items-center">

                {/* dark and light icon */}

                <ModeSwitch />

                <Link href='/' className='cursor-pointer'>
                    <span
                        className='font-bold  bg-main-color rounded-md shadow-md p-1'
                    >IMDb
                    </span>

                    <span className='hidden md:inline'>Clone</span>
                </Link>

            </div>


        </header>
    )
}

export default Header