import React from 'react'
import Image from 'next/image'
import RightArrow from '../../assets/icons/RightArrow'

const Hero = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <h1 className='text-4xl font-semibold leading-tight'>I’m not tofu-tally sure, but I think tofu is soy-yummy!</h1>
                <p className='text-gray-400 my-4'>Fried rice wrapped by Yubu (Fried Tofu) with various toppings.</p>
                <div className='flex gap-x-4'>
                    <button className='bg-primary text-white px-4 py-2 rounded-full flex items-center gap-x-2'>
                        Order Now
                        <RightArrow />
                    </button>
                    <button className='px-4 py-2 flex items-center gap-x-2 border rounded-full'>
                        Learn more
                        <RightArrow />
                    </button>
                </div>
            </div>
            <div className='relative' >
                <Image
                    src='/images/yubu-round.png'
                    className='object-contain'
                    fill
                    alt='yubu tray'
                />
            </div >
        </div>
    )
}

export default Hero