import React, { useContext } from 'react'
import logo from '../assets/logo.webp'
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { Link } from 'react-router-dom';
import { HouseContext } from './HouseContext';

const Navbar = ({setSignIn, signIn}) => {
 
    const {addCart,setAddCart} = useContext(HouseContext);
    const userName = sessionStorage.getItem("name");
    const email = sessionStorage.getItem("email");
    let namePart = userName;

    if(!userName && email)
    {
       namePart = email.split('@')[0];
    }
    
    


    return (
        <div className='mt-2 flex justify-between items-center'>
   <Link to='/'> <img className='md:max-w-[100px] max-w-[50px] rounded-md' src={logo} alt="" /> </Link>

    <nav className='hidden md:block'>
    <ul className='text-xl text-Primary font-normal flex justify-center items-center gap-12 cursor-pointer'>
        <Link to='/'><li>Home</li></Link>
        <li><a href="#properties">Properties</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

     <div className='flex gap-8 items-center'>
        <div className='flex gap-2'>
            
            <Link className='' to="/cart"><MdOutlineRealEstateAgent className='text-4xl cursor-pointer' /></Link>
           { addCart.length > 0 && <p className='text-green-800 text-xl font-bold'>{addCart.length}</p> }
       </div>
       {namePart ? (
      // Display the user's name if they are logged in
      <span className='md:text-lg text-base text-Secondary bg-Primary md:px-5 px-3 md:py-2 py-1 rounded-md font-normal'>
        Hi, {namePart}!
      </span>
    ) : (
      
      <button
        onClick={() => setSignIn(true)}
        className='text-lg text-Secondary bg-Primary px-5 py-2 rounded-md font-normal hover:bg-Secondary hover:text-Primary'
      >
        Login
      </button>
    )}
         </div>   
    
</div>
    )
}

export default Navbar
