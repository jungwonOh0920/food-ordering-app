import React from 'react'
import Image from 'next/image'

const MenuItem = () => {
    return (
        <div className='bg-gray-200 w-48 overflow-hidden text-center mx-auto'>
            <div className='w-full overflow-hidden flex items-center justify-center'>
                <Image src={'/images/yubu.png'} width={180} height={180} />
            </div>
            <h3>Yubu</h3>
        </div>
    )
}

export default MenuItem