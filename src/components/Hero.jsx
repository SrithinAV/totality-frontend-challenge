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

      useGSAP(()=>
  {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      
      gsap.to(box,{

        x:150 * (boxes.indexOf(box)+3),
        y:150,
        rotation:360,
        opacity:0.6,
        borderRadius:'100%',
        scale:1.5,
        scrollTrigger:
        {
          trigger:box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub:true,
          
        },
        ease:'power1.inOut'
      })
    
    })
  },{scope:scrollRef});

  return (
    <div className='mt-10 relative'>
       
        <div className='flex md:flex-row flex-col justify-between items-center '>
            <div>
          
                <h1 id='text' className='text-[40px] font-bold'><span className='text-purple-700'>Find</span> Your Dream Home By Us</h1>
                <p className='para font-bold text-[18px] mt-4'> "Where your dreams meet the perfect home, we’re here to guide you every <br />Let us help you find the place you’ll love calling home"</p>
                <div className="mt-20 absolute" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="opacity-0 text-[50px] flex justify-center items-center scroll-box w-20 h-20 rounded-full bg-Primary"
        >🙂</div>
       
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
