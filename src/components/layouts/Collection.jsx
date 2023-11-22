import React from 'react'
import Heading from '../Heading'
import Card from './Card'
import Sweater from '../../assets/card-img.png'
import jeans from '../../assets/Jeans.png'


const Collection = () => {
  return (
    <section id='collection' className=' pt-[217px] pb-[327px]'>
        <div className="container mx-auto">
            <div className="heading text-center mx-auto ">
            <Heading design='font-Frank font-bold text-[64px]' text='New Collection' as='h3' />
            </div>
            <div className="display flex justify-around mt-6">
                <Card imgSrc={Sweater} imgAlt='card-img' title='Sweater' />
                <Card imgSrc={jeans}imgAlt='card-img' title='Jeans' />
                <Card imgSrc={Sweater} imgAlt='card-img' title='Baskets' />
            </div>
        </div>
    </section>
  )
}

export default Collection