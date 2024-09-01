import React, { useContext } from 'react'
import { HouseContext } from './HouseContext'
import {BiBed, BiBath, BiArea} from 'react-icons/bi'
import { Link } from 'react-router-dom';


const Cart = () => {
  
    // <p>₹ {addCart.reduce((total, house) => total + parseInt(house.price), 0)}</p>
    const {addCart,setAddCart} = useContext(HouseContext);

    const onHandleClick = (index) => {
        setAddCart((prev) => {
            
            return prev.filter((_, i) => i !== index);
        });
    };
  return (
    <div className='mt-14'>
       <div className='grid grid-cols-5 text-center bg-Primary text-white font-normal md:font-bold py-3 rounded-lg md:text-[20px] text-[10px]'>
            <p>House</p>
            <p>Properties</p>
            <p>Booking Date</p>
            <p>Cost</p>
            <p>Remove</p>
       </div>
       
            <div className='mt-5'>
                {addCart.map((house,index)=>
                {
                    return(
                        <div className='grid grid-cols-5 mb-8 text-center justify-center items-center font-semibold py-3 rounded-xl md:text-[16px] text-[10px] shadow-lg'>
                            <div>
                            <img className="w-full rounded-t-lg max-w-[275px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-auto" src={house.image} alt="" />
                                <div className='flex flex-col items-center justify-center bg-[#c9c9c9] rounded-b-lg'>
                                <p>{house.name}</p>
                                <p className=' md:text-[14px] text-[8px] font-medium'>{house.title}</p>
                                </div>
                            </div>

                            <div className=' md:ml-20 flex flex-col items-start'>

                               <div className='flex md:gap-6 gap-2 justify-between items-center'> <BiBed /> <p>{house.bedrooms}</p></div>
                               <div className='flex md:gap-6 gap-2 justify-between items-center'> <BiBath /><p>{house.bathroom}</p></div> 
                               <div className='flex md:gap-6 gap-2 justify-between items-center'> <BiArea /><p>{house.area}</p></div>
                            
                            </div>

                            <div>
                                <p>{house.date}</p>
                            </div>

                            <div>
                                <p>₹ {house.price}</p>
                            </div>
                            
                            <div>
                                <p onClick={()=>onHandleClick(index)} className='cursor-pointer '>X</p>
                            </div>


                        </div>
                    )
                })}
            </div>

            
            <div className=''>
          <div className='max-w-full flex flex-col gap-5 mb-10 shadow-2xl rounded-lg p-5'>
            <div className='text-[35px] font-bold text-center '>Cart Totals</div>
            <div className=' flex  justify-between items-center'>
                <p>Booking Counts</p>
                <p>{addCart.length}</p>
                
            </div>
            <div className='flex   justify-between items-center'>
                <p>Subtotal</p>
                <p>₹ {addCart.reduce((total, house) => total + parseInt(house.price), 0)}</p>
                
            </div>
            

            <div className='flex  justify-between items-center'>
                <p>Platform Fee</p>
                <p>₹ 100</p>
            </div>

            <div className='flex  justify-between items-center'>
                <p className='font-bold text-[28px]'>Total</p>
                <p  className='font-bold text-[28px]'>₹ {addCart.reduce((total, house) => total + parseInt(house.price), 0) + 100}</p>
            </div>

           <Link to='/checkout'>
            <button className=' w-full bg-Primary text-white py-3 rounded-lg \' >Checkout</button> </Link>

          </div>

          
          </div>
    </div>
  )
}

export default Cart
