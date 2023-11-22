import React from "react";
import Image from "./Image";
import ModelTwo from '../../assets/Model-two.png'
import Heading from "../Heading";
import Content from "../Content";
import Counter from '../../assets/Counter.png'

const BestSell = () => {
  return (
    <section className="pb-[335px] pt-[236px]">
      <div className="max-w-Container mx-auto">
        <div className="md:flex justify-between relative">
          <div className="max-w-[660px]">
            <Image className='' imgSrc={ModelTwo} imgAlt={ModelTwo} />
          </div>
          <div className="max-w-[437px]">
            <Heading text='Best Fashion Since 2010' as='h3' />
            <Content className='font-Poppins font-semibold text-[24px] mt-[63px]' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra." />
            <Image className='max-w-[793px] md:absolute bottom-[-197px] z-[-2] right-0' imgSrc={Counter} imgAlt={Counter} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSell;
