import React from 'react'
import { useState, useEffect, createContext, useContext } from 'react'

//import data

import {housesData} from '../assets/assets.js'


export const HouseContext = createContext()


const HouseContextProvider = ({ children }) => {
 
  const [houses, setHouses] = useState(housesData)
 const [country, setCountry] = useState('Location (any)');
 const [countries, setCountries] = useState([]);
 const [property, setProperty] = useState('property (any)');
 const [properties, setProperties] = useState([]);
 const [price, setPrice] = useState('Price range (any)');
 const [loading, setLoading] = useState(false);
 const [addCart, setAddCart] = useState([]);

 //return all countries

 useEffect(()=>
 {

  const allCountries = houses.map((house)=>
  {
    return house.location;
  });
  // console.log(allCountries);
  //remove duplicate

  const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

  setCountries(uniqueCountries);
  

 },[])

 useEffect(()=>
 {

  const bedrooms = houses.map((house)=>
  {
    return house.bedrooms;
  });
  // console.log(allCountries);
  //remove duplicate

  const uniqueBedrooms = ['Bedrooms (any)', ...new Set(bedrooms)];

  setProperties(uniqueBedrooms);


 },[])

//  useEffect(()=>
//  {

//   const price = houses.map((house)=>
//   {
//     return house.price;
//   });
//   // console.log(allCountries);
//   //remove duplicate

//   const uniquePrice = [new Set(price)];

//   setPrice(uniquePrice);
//   console.log(uniquePrice);

//  },[])

const handleClick = ()=>
{


  console.log(country, property, price);

  setLoading(true);

  //fun to check if the string includes ('any')

  const isDefault = (str)=>
  {
    console.log(str.split(' '));
    return str.split(' ').includes('(any)');
   

  };
  console.log(isDefault(price));
  // get first value of price range

  const minPrice = parseInt(price.split(' ')[0]);
  console.log(minPrice);

  //get second value of price range

  const maxPrice = parseInt(price.split(' ')[2]);
  console.log(maxPrice);

  const newHouses = housesData.filter((house)=>
  {
   const housePrice =(parseInt(house.price));

   if(house.location === country && house.bedrooms ==property && housePrice >= minPrice && housePrice <= maxPrice)
   {
    return house;
   }
  //for all values
   if(isDefault(country) && isDefault(property) && isDefault(price))
   {

    console.log("all values");
    return house;

   }

   //if country is not selected
   if(!isDefault(country) && isDefault(property) && isDefault(price))
   {
        return house.location === country;
   }

   //if property is not selected
   if(isDefault(country) && !isDefault(property) && isDefault(price))
   {
        return house.bedrooms === property;
   }

   //if price is not selected
   if(isDefault(country) && isDefault(property) && !isDefault(price))
   {
        if( housePrice >= minPrice && housePrice <= maxPrice)
        {
            return house;
        }
   }

   //if country and property is not selected
    
   if(!isDefault(country) && !isDefault(property) && isDefault(price))
   {
      return house.location === country && house.bedrooms === property;
   }

   //if country and price is not selected
   
   if(!isDefault(country) && isDefault(property) && !isDefault(price)){

        if( housePrice >= minPrice && housePrice <= maxPrice)
        {
          return house.location === country;
        }
   }

   //if property and price is not selected
  
    if(isDefault(country) && !isDefault(property) && !isDefault(price))
    {

      if(housePrice>= minPrice && housePrice <= maxPrice)
      {
        return house.bedrooms === property; 
      }
    }


  })


  setTimeout(()=>
  {
    return newHouses.length < 1? setHouses([]): setHouses(newHouses),
    setLoading(false)
  },1000);
  

}


  return (
    <HouseContext.Provider value={
      {
        country,
        setCountry,
        countries,
      
        property,
        setProperty,
        properties,
    
        price,
        setPrice,

        loading,
        setLoading,
        houses,
        handleClick,

        setAddCart,
        addCart,
     
      }
    }>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider
