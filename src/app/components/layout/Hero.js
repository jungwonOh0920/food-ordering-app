import React from 'react'
import Image from 'next/image'
import RightArrow from '../../assets/icons/RightArrow'

const Hero = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <h1 className='text-4xl font-semibold'>Everything is better with Fried chicken</h1>
                <p className='text-gray-400'>Fried chicken is the missing peice that makes every day complete, a simple yet delicious joy in life.</p>
                <div className='mt-4 flex gap-x-4'>
                    <button className='bg-primary text-white px-4 py-2 rounded-full flex gap-x-2'>
                        Order Now
                        <RightArrow />
                    </button>
                    <button className='px-4 py-2 flex gap-x-2 border rounded-full'>
                        Learn more
                        <RightArrow />
                    </button>
                </div>
            </div>
            <div className='relative'>
                <Image
                    src='/images/fried-chicken.png'
                    className='object-contain'
                    fill
                    alt='chicken'
                />
            </div>
        </div>
    )
}

export default Hero