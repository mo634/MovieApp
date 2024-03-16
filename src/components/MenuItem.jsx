import Link from 'next/link'
import React from 'react'

function MenuItem({ title, Icon, address }) {
    return (
        <Link href={address}

        >
            <p
            className=' hidden md:block uppercase text-xl'
            >{title}</p>

            <Icon 
            className='inline md:hidden text-2xl '
            />
        </Link>
    )
}

export default MenuItem