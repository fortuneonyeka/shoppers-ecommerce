import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, payments } from '../../assets/index.js';
import { FaInstagramSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TiUser } from "react-icons/ti";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdSpatialTracking } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";


const Footer = () => {
  const socials = [
    {
      social: FaGithub,
      link: 'https://github.com/fortuneonyeka',
      color: "blue-300 "
    },
    {
      social: FaLinkedin,
      link: 'https://www.linkedin.com/in/fortuneonyeka/',
      color:"[#0A66C2] "
    },
    {
      social: FaInstagramSquare,
      link: 'https://www.instagram.com/fortuneonyeka/',
      color:"[#D400C3] "
    },
    {
      social: FaXTwitter,
      link: 'https://twitter.com/fortuneonyeka',
      color: "[#0A66C2]"
    },
  ];

  return (
    <div className='bg-gray-800 text-[#949494] font-titleFont px-4 bottom-0 z-50 '>
      <div className='max-w-screen-xl mx-auto grid grid-cols-2 gap-2 md:flex md:flex-row py-5 justify-between'>
         
        <div className='w-10 h-10 flex flex-col gap-6'>
          <Link to="/"><img className='rounded-full cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]' src={Logo} alt='Logo' /></Link>
          <p>@Ihedoro</p>
        </div>
        <div className='flex md:flex-col gap-6 py-8 pt-14 px-8'>
          <div className='w-24 transform transition-transform duration-300 hover:scale-150'>
            <img src={payments} alt='payments' />
          </div>
          <div className='flex gap-2 w-32 '>
            {socials.map((social, index) => (
              <a key={index} href={social.link} target='_blank' rel='noopener noreferrer'>
                 
                <social.social
                  className={`transition-transform duration-300 hover:scale-150 hover:text-${social.color} cursor-pointer`}
                />
              </a>
            ))}
          </div>
        </div>
        
        <div className='flex flex-col gap-2'>
          <h3 className='text-md font-bold'>Contact Us</h3>
          <p className='text-xs'>Victorial: Island, Lagos</p>
          <p className='text-xs'>Mobile: +2348038852544</p>
          <p className='text-xs'>Email: ihedfortune@gmail.com</p>
          <p className='text-xs'>Whatsapp: +2348038852544</p>
        </div>
        <div className='flex flex-col gap-2 cursor-pointer'>
          <h3 className='text-md font-bold'>Profile</h3>
          <a href='/account' className='text-xs flex gap-1 items-center transition-transform duration-300 hover:scale-150 hover:text-green-200'>
            <span><TiUser /></span>
             My Account
          </a>
          <a href='/checkout' className='text-xs flex gap-1 items-center transition-transform duration-300 hover:scale-150 hover:text-green-200'>
          <span><IoBagCheckOutline /></span>
             Checkout
          </a>
          <a href='/order-tracking' className='text-xs flex gap-1 items-center transition-transform duration-300 hover:scale-150 hover:text-green-200 '>
          <span><MdSpatialTracking /></span>
            Order Tracking
          </a>
          <a href='/help-support' className='text-xs flex gap-1 items-center transition-transform duration-300 hover:scale-150 hover:text-green-200'> 
          <span><FaHandsHelping /></span>
            Help & Support
          </a>
        </div>
        <div className='flex flex-col gap-2'>
            <p>Subscribe</p>
          <form action='' className='flex gap-2 md:gap-2 md:flex-col shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-md'>
            <input type='email' placeholder='email' className='rounded-md py-2 px-1' />
            <button className='bg-gray-700 text-white rounded-lg hover:bg-[#17A349] hover:text-black py-2 px-4 md:px-1 focus:border-none text-md'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
