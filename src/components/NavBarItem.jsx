"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
function NavBarItem({ title, param }) {
    const searchParams = useSearchParams()

    const genre = searchParams.get("genre")

    console.log(genre)
    return (
        <>
            <Link href={`/?genre=${param}`}
                className={`cursor-pointer 
            hover:opacity-[0.7] duration-200
            ${genre === param ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'" : ""}
            `}
            >
                {title}
            </Link>

        </>
    )
}

export default NavBarItem