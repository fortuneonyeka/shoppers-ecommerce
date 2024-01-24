import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, user, cart } from '../../assets/index.js';

const Header = () => {
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
      link: '/blogs',
      number: 0
    },
    {
      img: user,
      link: '/blogs',
    },
  ];

  return (
    <div className=' h-20 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between '>
        <div className='w-10 h-10'>
          <Link to="/"><img className='rounded-full cursor-pointer' src={Logo} alt='logo' /></Link>
        </div>
        <div className='hidden md:flex items-center gap-8 text-xl px-2'>
          {navItems.map((item, index) => {
            return <div key={index}>
              <p className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'><Link to={item.link}>{item.name}</Link></p>
              <div className='w-8 flex relative'>
                <img className='border-2 rounded-full' src={item.img} alt="" />
                <span className='absolute w-6 top-1 left-3 text-xs flex items-center justify-center font-semibold'>{item.number}</span>
              </div>
            </div>
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Header;
