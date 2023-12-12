import React from 'react'
import Image from 'next/image'
import MenuItem from './menu/MenuItem'

const HeroMenu = () => {
    return (
        <section>
            <div className='relative bg-primary border-slate-4'>
                <div className='absolute left-0 w-36 h-80 overflow-hidden'>
                    <Image src='/images/spoon.png' fill className='object-cover -ml-12' />
                </div>
                <div className='absolute right-0 w-36 h-80 overflow-hidden'>
                    <Image src='/images/chopsticks.png' fill className='object-cover ml-12' />
                </div>
            </div>
            <div className='text-center'>
                <h3 className='font-semibold text-gray-400 leading-4'>Check out</h3>
                <h3 className='text-primary font-bold text-4xl italic'>Menu</h3>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    )
}

export default HeroMenu