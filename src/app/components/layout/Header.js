import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='flex justify-between items-center'>
            <Link href='' className='text-primary font-semibold text-2xl'>Crunchick</Link>
            <nav className='flex items-center gap-x-8 text-gray-500 text-xl font-semibold'>
                <Link href='/'>Home</Link>
                <Link href='/'>Menu</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <Link href='/' className='bg-primary text-white px-8 py-2 rounded-full'>Login</Link>
            </nav>
        </header>
    )
}

export default Header