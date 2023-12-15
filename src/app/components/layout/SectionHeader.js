import React from 'react'

const SectionHeader = ({subTitle, title}) => {
    return (
        <div className='text-center'>
            <h3 className='font-semibold text-gray-400 leading-4'>{subTitle}</h3>
            <h2 className='text-primary font-bold text-4xl italic'>{title}</h2>
        </div>
    )
}

export default SectionHeader