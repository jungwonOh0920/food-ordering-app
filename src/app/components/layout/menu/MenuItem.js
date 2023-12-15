import React from 'react'
import Image from 'next/image'

const MenuItem = () => {
    return (
        <div className='bg-gray-200 overflow-hidden text-center mx-auto px-4 rounded-lg hover:bg-white hover:shadow-2xl hover:shadow-black/50'>
            <div className='w-full overflow-hidden flex items-center justify-center'>
                <Image src={'/images/yubu.png'} width={180} height={180} />
            </div>
            <h3 className='font-bold text-xl my-3'>Yubu</h3>
            <p p className='text-gray-400 text-sm' > Lorem ipsum dolor, sit amet consectetur adipisicing elit.Consequatur, et ?</p >
            <button className='bg-YBBrown text-primary px-4 py-1 rounded-full flex items-center mx-auto my-3'>
                Add to Cart $5
            </button>
        </div >
    )
}

export default MenuItem