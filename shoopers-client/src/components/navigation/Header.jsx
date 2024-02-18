import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo, user, cart } from '../../assets/index.js';
import { useSelector } from "react-redux";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false); // State to manage mobile navigation visibility
  const [activeNavItem, setActiveNavItem] = useState(null); // State to track the active nav item

  const cartItems = useSelector((state) => state.shopper.productData);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Shop',
      link: '/shop',
    },
    {
      name: 'Blogs',
      link: '/blogs',
    },
    {
      img: cart,
      link: '/cart',
      number: itemCount
    },
    {
      img: user,
      link: '/user',
    },
  ];

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
    setShowMobileNav(false); // Close mobile navigation when a nav item is clicked
  };

  return (
    <div className='h-20 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <div className='w-10 h-10 md:hidden'>
          <button onClick={toggleMobileNav}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center  md:border-none bg-gray-800 pt-28 md:pt-0 text-white md:bg-transparent gap-8 text-xl px-9  list-none md:px-2 ${showMobileNav ? 'block' : 'hidden'}`}>
          {navItems.map((item, index) => (
            <div key={index}>
             <p className={`text-base md:text-black text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ${activeNavItem === index ? 'border-l-4 border-yellow-500 pl-1' : ''}`}>
                <Link to={item.link} onClick={() => handleNavItemClick(index)}>{item.name}</Link>
              </p>
              <Link to={item.link}>
                <div  className='w-8 flex relative '>
                  <img onClick={() => handleNavItemClick(index)} className='border-2 rounded-full hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]' src={item.img} alt="" />
                  {item.number > 0 && ( 
                    <span className='absolute w-6 top-1 left-3 text-xs flex items-center justify-center font-semibold'>{item.number}</span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
