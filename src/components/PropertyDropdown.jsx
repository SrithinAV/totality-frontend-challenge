import React, { useState, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { HouseContext } from './HouseContext';
import { FaBed } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";

const PropertyDropdown = () => {
  const { price, setPrice} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'PriceRange (any)',
    },
    {
      value: '80000 - 90000',
    },
    {
      value: '100000 - 120000',
    },
    {
      value: '120000 - 130000',
    },
    {
      value: '130000 - 140000',
    },
    {
      value: '140000 - 150000',
    },
    {
      value: '150000 - 160000',
    },
    
  ]

  return (
    <Menu as="div" className="dropdown relative w-full">
      <MenuButton
        className="dropdown-btn w-full text-left flex items-center justify-between sm:text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdPriceChange className="dropdown-icon-primary" />
        <div className="flex-grow ml-2">
          {isOpen ? (
            <div className="text-[13px] font-normal leading-tight">
              Choose Price Range
            </div>
          ) : (
            <div className="text-[15px] font-medium">
              {price}
            </div>
          )}
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </MenuButton>

      <MenuItems
        className="dropdown-menu "
        style={{ zIndex: 1000 }}
      >
        {prices.length > 0 ? (
          prices.map((price, index) => (
            <MenuItem
              onClick={() => {
                setPrice(price.value);
                setIsOpen(false); // Close the menu after selecting
              }}
              as="li"
              className="cursor-pointer hover:text-accent transition px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              key={index}
            >
              {price.value}
            </MenuItem>
          ))
        ) : (
          <div className="px-4 py-2">No countries available</div>
        )}
      </MenuItems>
    </Menu>
  );
};


export default PropertyDropdown;