import React,{useRef} from 'react'
import banner from '../assets/hero-banner.png'
import { Link } from 'react-router-dom'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

    const scrollRef = useRef();

    useGSAP(()=>{

        gsap.to('#text', {
          
          ease:'power1.inOut',
          opacity:1,
          y:0,
        })
    
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


  return (
    <div className='mt-10 relative mb-4'>
       
        <div className='flex md:flex-row flex-col justify-between items-center '>
            <div>
          
                <h1 id='text' className='text-[40px] font-bold'><span className='text-purple-700'>Find</span> Your Dream Home By Us</h1>
                <p className='para font-bold text-[18px] mt-4'> "Where your dreams meet the perfect home, we’re here to guide you every <br />Let us help you find the place you’ll love calling home"</p>
                <div className="mt-20 absolute" ref={scrollRef}>
       
       
      </div>
               <a href='#properties'><button className='mt-6 bg-Primary text-white px-6 py-3 rounded-md'>See Properties</button> </a> 
               
            </div>
            <div>
                <img className='max-w-full rounded-3xl' src={banner} alt="" />
            </div>
        </div>

       

    </div>
  )
}

export default Hero
