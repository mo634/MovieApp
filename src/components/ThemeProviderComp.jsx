"use client"

import React from 'react'

import { ThemeProvider } from "next-themes"
function ThemeProviderComp({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme='system'>
            <div className='min-h-screen
            transition-colors
            duration-500
                text-main-text-color
                dark:text-gray-200
                dark:bg-gray-700
                '>
                {children}
            </div>
        </ThemeProvider>
    )
}

export default ThemeProviderComp


