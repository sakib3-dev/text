import React from 'react'

const Image = ({imgSrc,imgAlt, className,}) => {
  return (
        <div className="mt-4"> 
                <img className={`${className}`} src={imgSrc}  alt={imgAlt} />
        </div>
  )
}

export default Image