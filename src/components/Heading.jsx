import React from 'react'

const Heading = (props,className) => {
  return (
    
      <props.as className={`${className} font-Poppins font-semibold lg:text-[64px] text-[36px] pr-3`}>{props.text}</props.as>
   
  )
}

export default Heading