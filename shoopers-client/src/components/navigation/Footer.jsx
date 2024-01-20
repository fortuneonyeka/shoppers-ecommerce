import React from 'react';
import { Logo, payments } from '../../assets/index.js';
import { FaInstagramSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socials = [
    {
      social: FaGithub,
      link: 'https://github.com/fortuneonyeka',
    },
    {
      social: FaLinkedin,
      link: 'https://www.linkedin.com/in/fortuneonyeka/',
    },
    {
      social: FaInstagramSquare,
      link: 'https://www.instagram.com/fortuneonyeka/',
    },
    {
      social: FaXTwitter,
      link: 'https://twitter.com/fortuneonyeka',
    },
  ];

  return (
    <div className='bg-gray-800 text-[#949494] font-titleFont py-20 px-4'>
      <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between'>
        <div className='w-10 h-10 flex flex-col gap-6'>
          <img className='rounded-full cursor-pointer' src={Logo} alt='Logo' />
          <p>@Ihedoro</p>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='w-24 transform transition-transform duration-300 hover:scale-150'>
            <img src={payments} alt='payments' />
          </div>
          <div className='flex gap-2 w-32 '>
            {socials.map((social, index) => (
              <a key={index} href={social.link} target='_blank' rel='noopener noreferrer'>
                 
                <social.social
                  className='transition-transform duration-300 hover:scale-150 hover:text-blue-300 cursor-pointer'
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
          <a href='/account' className='text-xs'>
             My Account
          </a>
          <a href='/checkout' className='text-xs'>
             Checkout
          </a>
          <a href='/order-tracking' className='text-xs '>
            Order Tracking
          </a>
          <a href='/help-support' className='text-xs'> 
            Help & Support
          </a>
        </div>
        <div>
          <form action='' className='flex flex-col shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-md gap-2 py-2'>
            <input type='email' placeholder='email' className='rounded-md py-2 px-1' />
            <button className='bg-gray-700 text-white rounded-lg hover:bg-[#17A349] hover:text-black py-2 px-1 focus:border-none text-md'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
