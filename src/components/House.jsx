import React from 'react'

import {BiBed, BiBath, BiArea} from 'react-icons/bi'
import {RiMapPinLine} from 'react-icons/ri'


const House = ({house}) => {
  
  const {image, area, bedrooms, bathroom,title, price,location} = house;

  const onButtonClick = ()=>
  {
     console.log("clicked");
  }
 
  return (
    <div className='z-20 md:mt-0 mt-4 bg-white shadow-1 px-5 pt-5 rounded-xl  w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
     <img className='mb-4 rounded-sm' src={image} alt="" />
     <div className='mb-4 flex gap-x-2 text-sm justify-between'>
      <div className='font-bold text-[18px]'>₹ {price}</div>
      <div className='flex gap-3'>
      <div className= ' flex md:text-[18px] text-[10px] items-center '><BiBed className='text-Primary' />{bedrooms}</div>
      <div className= ' flex md:text-[18px] text-[10px]  items-center '><BiBath className='text-Primary' />{bathroom}</div>
      <div className= ' flex md:text-[18px] text-[10px] items-center '><BiArea className='text-Primary' />{area}</div>
      </div>
     </div>

     <div className='flex justify-center mt-6 items-center gap-3'>
        <RiMapPinLine />{location}, {title}
      </div>
      <div className='flex justify-center mt-6'>
    <button className='px-7 py-3 rounded-t-lg bg-Primary text-white z-1 ' onClick={onButtonClick}>Book Now</button>
  </div>
    </div>
  )
}

export default House
