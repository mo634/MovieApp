import Link from 'next/link'
import React from 'react'
import NavBarItem from './NavBarItem'

function NavBar() {
    return (
        <div className='justify-center flex gap-4 bg-[#eee] p-3 text-main-color text-lg '>
            <NavBarItem title="Trending" param="fetchTrending"/>
            <NavBarItem title="Top Rated" param="fetchTopRated"/>
        </div>
    )
}

export default NavBar