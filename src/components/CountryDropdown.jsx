import React, { useState, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative w-full">
      <MenuButton
        className="dropdown-btn w-full text-left flex items-center justify-between sm:text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div className="flex-grow ml-2">
          {isOpen ? (
            <div className="text-[13px] font-normal leading-tight">
              Select your place
            </div>
          ) : (
            <div className="text-[15px] font-medium">
              {country}
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
        {countries.length > 0 ? (
          countries.map((country, index) => (
            <MenuItem
              onClick={() => {
                setCountry(country);
                setIsOpen(false); // Close the menu after selecting
              }}
              as="li"
              className="cursor-pointer hover:text-accent transition px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              key={index}
            >
              {country}
            </MenuItem>
          ))
        ) : (
          <div className="px-4 py-2">No countries available</div>
        )}
      </MenuItems>
    </Menu>
  );
};

export default CountryDropdown;
