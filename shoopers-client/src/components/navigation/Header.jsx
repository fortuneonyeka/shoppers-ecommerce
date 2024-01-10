import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/index.js';

const Header = () => {
  const navItems = [
    {
      name: 'Home',
      link: '/home',
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
  ];

  return (
    <div className='w-full h-20 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between '>
        <div className='w-10 h-10'>
          <img className='rounded-full' src={Logo} alt='logo' />
        </div>
        <div className='flex items-center gap-8 text-xl'>
          {navItems.map((item, index) => {
            return <div key={index}><p className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>{item.name}</p></div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
