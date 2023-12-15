import React from 'react'
import MenuItem from './menu/MenuItem'
import SectionHeader from './SectionHeader'

const HeroMenu = () => {
    return (
        <section>
            {/* <div className='relative bg-primary border-slate-4'>
                <div className='absolute left-0 w-36 h-80 overflow-hidden'>
                    <Image src='/images/spoon.png' fill className='object-cover -ml-12' />
                </div>
                <div className='absolute right-0 w-36 h-80 overflow-hidden'>
                    <Image src='/images/chopsticks.png' fill className='object-cover ml-12' />
                </div>
            </div> */}
            <SectionHeader subTitle={'Check out our'} title={'Menu'} />
            <div className='grid grid-cols-3 gap-4 mt-4'>
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