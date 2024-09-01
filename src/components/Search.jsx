
import React, { useContext } from 'react'
import CountryDropdown from './CountryDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import PropertyDropdown from './PropertyDropdown'

import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from './HouseContext';

const Search = () => {
const {houses} = useContext(HouseContext);
// console.log(houses);

const {handleClick} = useContext(HouseContext);


    return (
        <div id='properties' className='properties mt-10 rounded-xl px-[30px] py-6 max-w-[1170px] 
        mx-auto flex flex-col lg:flex-row justify-between gap-4
        lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur'>

            <CountryDropdown />
            <PropertyDropdown />
            <PriceRangeDropdown />

            <button onClick={handleClick} className='bg-Primary hover:bg-Accent
             transition w-full lg:max-w-[162px] h-16 rounded-xl 
             flex justify-center items-center text-white text-lg'>
                <RiSearch2Line />
            </button>

        </div>
    )
}

export default Search
