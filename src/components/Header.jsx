import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
function Header() {
    return (
        <header className='  flex justify-between items-center p-[2%]'>
            <div className=" flex gap-4">
                <MenuItem title="Home" Icon={AiFillHome}  address = "/"/>
                <MenuItem title="about" Icon={BsFillInfoCircleFill}  address = "/about"/>
            </div>


            <div className="text-3xl text-white">
                <span
                className='font-bold  bg-amber-500  rounded-md shadow-md p-1'
                >IMDb
                </span>

                <span className='hidden md:inline'>Clone</span>

            </div>


        </header>
    )
}

export default Header