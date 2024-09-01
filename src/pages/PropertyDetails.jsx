import React, { useContext, useEffect, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { housesData } from '../assets/assets'

import { useParams, Link } from 'react-router-dom'

import {BiBed, BiBath, BiArea} from 'react-icons/bi'
import { FaIndianRupeeSign } from "react-icons/fa6";

import { HouseContext } from '../components/HouseContext'



const PropertyDetails = () => {

    useGSAP(()=>{

       
    
        gsap.fromTo('.para',
        {
            opacity:0,
            y:50,
            x:20,
        },
        {
            opacity:1,
            y:0,
            x:0, 
            delay:1,
            stagger:0.1,
        })
    
      },[])
    

    const {id} = useParams();

    const {addCart,setAddCart} = useContext(HouseContext);

    const [addedToCart, setAddedToCart] = useState(false);


    

    const house = housesData.find(house =>{
        return house.id === parseInt(id);
    })

    const handleButtonClick = () => {
        const house = housesData.find(house => {
            return house.id === parseInt(id);
        });
    
        if (house) {

            // Get the current date and format it as dd/mm/yyyy
            const currentDate = new Date();
            const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${currentDate.getFullYear()}`;
    
            // Add the date property to the house object
            const houseWithDate = { ...house, date: formattedDate };
    
            // Update the addCart state with the new object
            setAddCart((prev) => {
                return [...prev, houseWithDate];
            });

            setAddedToCart(true);
        }
    };

    useEffect(()=>
    {
        console.log(addCart);
    }, [addCart])


  return (
    <section>

        <div className='container min-h-[800px] mb-14 mt-[40px] '>

        <div className=' flex flex-col w-full h-full gap-x-10 justify-between  md:flex md:flex-row' >

            <div className='flex flex-col w-full h-full '>
                <div className='bg-[#c9c9c9] rounded-t-xl'>
                <div className='flex justify-center items-center text-Primary md:text-5xl text-xl font-bold mt-1' >{house.name}</div>
                <div className='flex justify-center items-center text-Accent md:text-lg text-base font-bold '>{house.title}</div>
                </div>
                <img className='' src={house.image} alt="" />
                <div className='rounded-b-xl bg-[#c9c9c9] text-primary px-6 py-3 w-full md:text-[22px] text-[16px] font-semibold flex gap-3 justify-between mt-0'> 
                <div className='flex gap-4 items-center'><FaIndianRupeeSign className='md:text-[22px] text-[22px]' />{house.price}</div>
                    <div className='flex gap-4 items-center'><BiBed className='md:text-[30px] text-[22px]' />{house.bedrooms}</div>
                    <div className='flex gap-4 items-center'><BiBath  className='md:text-[30px] text-[22px]'  />{house.bathroom}</div>
                    <div className='flex gap-4 items-center'><BiArea  className='md:text-[30px]text-[22px]' />{house.area}</div>
                </div>

            </div>

            <div className='flex flex-col  min-h-[800px] max-w-[500px] md:justify-start justify-start md:gap-[22px] gap-[10px] items-center md:mt-0 mt-4'>
                <p  className='para text-justify text-Accent font-semibold text-[20px]'>{house.description}</p>
                <div className='flex gap-4 items-center'><BiBed className='md:text-[30px] text-[22px]' />Bedrooms: {house.bedrooms}</div>
                <div className='flex gap-4 items-center'><BiBath  className='md:text-[30px] text-[22px]'  />Bathrooms: {house.bathroom}</div>
                    <div className='flex gap-4 items-center'><BiArea  className='md:text-[30px] text-[22px]' />Square Feet: {house.area}</div>
                <button onClick={handleButtonClick} className='max-w-[160px] py-3 px-8 font-bold text-[20px] bg-Primary text-white rounded-lg'>{ addedToCart ? "Added ! " : house.button}</button>
            </div>
           
        </div>    
        </div>      
    </section>
  )
}

export default PropertyDetails
