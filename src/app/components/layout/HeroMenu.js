import React from 'react'
import Image from 'next/image'

const HeroMenu = () => {
    return (
        <section>
            <div className='relative bg-primary border-slate-4'>
                <div className='absolute left-0 w-24 h-80 bg-blue-400 overflow-hidden'>
                    <Image src='/images/lemonade.png' fill className='object-cover -ml-8' />
                </div>
                <div className='absolute right-0 w-12 h-16 bg-yellow-400'>
                    <Image src='/images/salad-right.png' width={109} height={189} className='absolute right-0 -top-12 -z-10' />
                </div>
            </div>
            <div className='text-center'>
                <h3 className='font-semibold text-gray-400 leading-4'>Check out</h3>
                <h3 className='text-primary font-bold text-4xl italic'>Menu</h3>
            </div>
        </section>
    )
}

export default HeroMenu