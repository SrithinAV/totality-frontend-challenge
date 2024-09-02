import React, { useContext, useState } from 'react'
import { HouseContext } from '../components/HouseContext'
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCcMastercard } from "react-icons/fa";
import Upi from '../assets/upi.png'
import { Link } from 'react-router-dom';

const CheckOut = () => {

  //{addCart.reduce((total, house) => total + parseInt(house.price), 0) + 100}

  const {addCart,setAddCart} =useContext(HouseContext);

  const [select, setSelect] = useState(false);

  const [cardData, setCardData] = useState(
    {
      name:"",
      number:"",
      date:"",
      cvv:""
    }
  )

  const [address, SetAddress] =useState({
  
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""

 })

  const onButtonClick = () => {
    window.alert("Paid Successfully");
    setAddCart([]);
 
    setCardData({
      name:"",
      number:"",
      date:"",
      cvv:""
    })


    SetAddress({
      firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""
    })

    
  };
  
  const onClickHandleCard = (event)=>
  {
     const {name, value} = event.target;

     setCardData((prev)=>({...prev, [name]:value}));
    //  console.log(address)
  }

  const onClickHandle = (event)=>
  {
     const {name, value} = event.target;

     SetAddress((prev)=>({...prev, [name]:value}));
    //  console.log(address);
     
  }

  const onSubmit = ()=>
  {
    
    window.alert("Saved Successfully");
  }


  return (
    <div className='mt-8 max-w-full bg-Accent rounded-3xl'>
    <div className='flex flex-col gap-5'>
       <h1 className='text-center md:text-[30px] text-[20px] text-white font-bold mb-12'>Booking Details</h1>
      <div className='w-full flex md:flex-row flex-col justify-between items-start'>
       
        <div className='w-full h-full  flex flex-col  bg-Accent md:px-10 px-10 py-3 rounded-bl-full    shadow-2xl'>
          <p className='md:text-[35px] text-[18px] text-white font-bold text-center mb-8'>Contact Information</p>
          <div>
            <div className='flex md:flex-row flex-col gap-6 mb-8'>
              <input  onChange={onClickHandle} value={address.firstName} name='firstName' className='w-full text-center px-6 py-3 rounded-md' placeholder='First Name' type="text" />
              <input onChange={onClickHandle} value={address.lastName} name='lastName' className='w-full text-center px-6 py-3 rounded-md' placeholder='Last Name' type="text"  />
            </div>
            <div className='mb-8'>
             <input onChange={onClickHandle} value={address.email} name='email' placeholder='Email' className='w-full text-center px-6 py-3 rounded-md' type="email"/>
            </div>
            <div className='mb-8'>
             <input onChange={onClickHandle} value={address.street} name='street' placeholder='Street Address' className='w-full text-center px-6 py-3 rounded-md'  type="text"/>
            </div>
            <div className='flex gap-6 mb-8'>
             <input onChange={onClickHandle} value={address.city} name='city' placeholder='City' className='w-full text-center px-6 py-3 rounded-md' type="text"/>
             <input onChange={onClickHandle} value={address.state} name='state' placeholder='State' className='w-full text-center px-6 py-3 rounded-md' type="text" />
            </div>
            <div className='flex gap-6 mb-8'>
             <input onChange={onClickHandle} value={address.zipCode} name='zipCode' placeholder='Zip Code' className='w-full text-center px-6 py-3 rounded-md' type="text"/>
             <input onChange={onClickHandle} value={address.country} name='country' placeholder='Country' className='w-full text-center px-6 py-3 rounded-md' type="text" />
            </div>
            <div className='flex justify-center items-center'>
              <button onClick={onSubmit} className='px-8 py-3 rounded-md bg-Primary text-white'>Save Changes</button>
            </div>
          </div>
        </div>

        <div className=' w-full h-full flex flex-col gap-2 bg-[#c9c9c9] md:px-10 px-10 py-3 rounded-br-3xl rounded-tl-3xl shadow-3xl'>
          <p className='md:text-[35px] text-[18px] text-Accent font-bold text-center mb-8'>payment Details</p>
          
          <div className='flex flex-col'>
              <div className='w-full flex md:flex-row flex-col justify-between md:gap-y-0 gap-y-4   '>
                <div onClick={ () => setSelect(!select)} className={!select ? 'cursor-pointer flex gap-3 items-center bg-white text-Primary px-6 py-3 rounded-md' :' cursor-pointer flex gap-3 items-center bg-Primary text-white px-6 py-3 rounded-md'}> 
                <CiCreditCard1 />
                <p>Credit Card</p>
                {select && <IoIosCheckmarkCircleOutline className='text-xl font-bold' color='green' /> }
                </div>
                <div  onClick={ () => setSelect(!select)} className=   {select ?' cursor-pointer  items-center flex gap-3 ml-3 md:px-14 py-4  rounded-md bg-white':'cursor-pointer flex gap-3 ml-3 md:px-14 py-4  rounded-md bg-Primary text-white'}>
                  
                  <div className = 'flex justify-center items-center md:max-w-[50px] max-w-[30px]'>
                  <img className='' src={Upi} alt="" />
                  </div>
                  
                 
                </div>
              </div>
            {select ?
              <div>

              <div className=' mt-6  flex flex-col gap-1'>
                <p className='font-bold' >Card Detail</p>
                <input  onChange={onClickHandleCard} value={cardData.name} name='name' className='text-center px-6 py-2 rounded-md' type="text" placeholder='Card Owner' />
              
              </div>

              <div className='mt-4 flex flex-col gap-1'>
                <p className='font-bold'> Card Number</p>
                <input onChange={onClickHandleCard} value={cardData.number} name='number' className='text-center px-6 py-2 rounded-md' placeholder='Card Number' type="text"/>
              </div>

              <div className='flex md:flex-row flex-col justify-between items-center gap-2'>
                <div className='flex flex-col gap'>
                <p className='mt-4 font-bold'>Valid on</p>
                <input onChange={onClickHandleCard} value={cardData.date} name='date' className='text-center px-6 py-2 rounded-md' placeholder='MM/YY' type="date" />
                </div>

                <div className='flex flex-col gap'>
                  <p className='mt-4 font-bold'>CVV Code</p>
                  <input onChange={onClickHandleCard} value={cardData.cvv} name='cvv' className='text-center px-1 py-2 rounded-md' placeholder='***' type="password" />
                </div>
                
              </div>

              <div className='flex gap-2 items-center justify-center mt-4 mb-10'>
                <input type="checkbox" />
                <p className='font-bold '>Securly save this card for future payment</p>
              </div>
              </div> : <div className='mt-6'>

                <div className='flex flex-col gap-1' >
                  <p className='font-bold'>UPI ID or Phone number</p>
                  <input className='text-center px-6 py-2 rounded-md' type="text" placeholder='UPI ID or Phone number' />
                </div>
              </div>
}
          </div>
          
          <div className='flex justify-center items-center'>
          <Link to='/'><button onClick={onButtonClick}  className='py-3 px-14 rounded-md bg-Primary text-white' >Pay  ₹{addCart.length > 0 && addCart.reduce((total, house) => total + parseInt(house.price), 0) + 100}</button></Link> 
          </div>
         
        </div>

         
        
      </div>

    </div>
    </div>
  )
}

export default CheckOut
