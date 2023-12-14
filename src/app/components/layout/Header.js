import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='flex justify-between items-center mt-4'>
            <div className='flex'>
                <Link href='' className='font-semibold text-2xl'><span className='text-primary'>Yubu</span>House</Link>
                <nav className='flex items-center gap-x-8 text-gray-500 text-xl font-semibold ml-12'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Menu</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>

                </nav>
            </div>
            <nav className='text-gray-500'>
                <Link href='/' className='text-xl font-semibold px-8 py-2'>Log In</Link>
                <Link href='/' className='bg-YBBrown text-primary px-8 py-2  rounded-full'>Register</Link>
            </nav>
        </header>
    )
}

export default Header