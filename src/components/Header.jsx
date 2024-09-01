import React, { useRef } from 'react';
import { headerList } from '../assets/assets';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const scrollRef = useRef();
    const imgRef = useRef();

    


    useGSAP(()=>
    {
      
        gsap.to('#image',
            {
                opacity:1,
                duration:3,
                yoyo:true,
                ease:'power1.inOut',
               
            },
        
        )


    });


    useGSAP(() => {
        const headings = scrollRef.current.querySelectorAll('.heading');
        const descriptions = scrollRef.current.querySelectorAll('.description');

        // Animate headings
        headings.forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 20%",
                        toggleActions: "play none none reverse",
                        // markers: true,
                    },
                }
            );
        });

        // Animate descriptions
        descriptions.forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 1, y: 50 },
                {
                    opacity: 0,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 30%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, { scope: scrollRef });

    return (
        <div className='mt-10 flex justify-end items-end shadow-2xl shadow-black shadow-opacity-50/50 rounded-xl'>
            <div className='w-[100vw] h-[100vh] md:w-[100vw] md:h-[100vh]'>
                <div className='flex justify-center items-center'>
                    {headerList.map((item, index) => (
                        <div className='relative' key={index}>
                            <img id = 'image' className='opacity-0 w-[51%] rounded-tl-xl rounded-bl-xl' src={item.img} alt="" ref={imgRef} />
                            <div className='absolute top-[10%] right-[5%] z-1 flex flex-col justify-start items-end' ref={scrollRef}>
                                {item.title.map((headingItem, index) => (
                                    <p key={index} className='text-black text-[50px] font-extrabold heading '>
                                        {headingItem.heading}
                                    </p>
                                ))}
                                {item.title.map((descItem, index) => (
                                    <p key={index} className='text-black text-[50px] font-extrabold description'>
                                        {descItem.desc}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
