import React from 'react'

import { FaStar } from "react-icons/fa6";

const Product = ({
    imgSrc,
    imgAlt,
    title,
    priceOne,
    priceTwo,
}) => {
  return (
    <div className='w-[366px] rounded-t-[60px]'>
        <img src={imgSrc} alt={imgAlt} />
        <div className="bg-white">
            <div className="ml-5 mt-3 mb-3 flex text-[20px] text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <h3 className="pl-5 pb-1 font-Poppins font-semibold text-[22px]">{title}</h3>
            <p className="pl-5 font-Poppins text-[24px] text-priceColor">{priceOne}<span className="pl-7 text-black">{priceTwo}</span></p>
        </div>
    </div>
  )
}

export default Product