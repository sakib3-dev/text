import React from 'react'

const Card = ({
    imgSrc,
    imgAlt,
    title,
}) => {
  return (
    <div className='relative w-[350px] rounded-[20px]'>
        <div className=""> 
                <img src={imgSrc}  alt={imgAlt} />
        </div>
        <h3 className='absolute bottom-[44px] left-[30px] px-24 py-[9px] rounded-[20px] bg-white font-Poppins text-[24px] '>{title}</h3>
    </div>
  )
}

export default Card