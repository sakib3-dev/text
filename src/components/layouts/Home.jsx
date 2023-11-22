import React from 'react'
import Heading from '../Heading'
import Image from './Image'
import Content from '../Content'
import Button from '../Button'
import Model from '../../assets/display-img.png'

const Home = () => {
  return (
    <section id='home' className='pt-[236px] py-[133px] bg-brand1'>
        <div className="max-w-Container mx-auto md:flex justify-between text-center">
            <div className="md:text-left">
            <div className="max-w-[556px]">
            <Heading design='' text='Find The Best Fashion Style For You' as='h1' />
            </div>
            <div className="max-w-[531px]">
            <Content className='font-Poppins font-semibold lg:text-[22px] pr-3 mt-[38px] mb-[50px] lg:mb-[101px]' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. ' />
            </div>
            <Button className='py-[25px] px-[91px] bg-black text-white font-Poppins font-semibold md:text-[24px] rounded-[10px] mb-6' text='SHOP NOW' />
            </div>
            
            <Image className='mx-auto' imgSrc={Model}
            imgAlt='card-img' />
        </div>
    </section>
  )
}

export default Home