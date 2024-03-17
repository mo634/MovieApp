
"use client"
import { useTheme } from 'next-themes';
import React from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md';

function ModeSwitch() {
    const {theme ,setTheme , systemTheme } = useTheme()
    return (
        <div className="">
            {
                theme === 'dark' ? (
                    <MdLightMode
                        className='text-3xl cursor-pointer'
                        onClick={() => setTheme('light')}
                    />
                ) : (
                    <MdDarkMode
                        className='text-3xl cursor-pointer'
                        onClick={() => setTheme('dark')}
                    />
                )
            }
        </div>
    )
}

export default ModeSwitch