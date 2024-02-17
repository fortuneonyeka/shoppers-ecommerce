import React from "react";
import { Link } from "react-router-dom";
import { Logo, payments } from "../../assets/index.js";
import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiUser } from "react-icons/ti";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdSpatialTracking } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      social: FaGithub,
      link: "https://github.com/fortuneonyeka",
      color: "blue-500",
    },
    {
      social: FaLinkedin,
      link: "https://www.linkedin.com/in/fortuneonyeka/",
      // color: "[#0A66C2] ",
      color: "blue-600",
    },
    {
      social: FaInstagramSquare,
      link: "https://www.instagram.com/fortuneonyeka/",
      // color: "[#D400C3] ",
      color: "red-400"
    },
    {
      social: FaXTwitter,
      link: "https://twitter.com/fortuneonyeka",
      // color: "[#0A66C2]",
      // color: "blue-300 ",
      color: "blue-600"
    },
  ];

  return (
    <div className="bg-gray-800 text-[#949494] font-titleFont px-4 z-50 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-7 md:flex md:flex-row py-12  justify-between">
        <div className="w-12 h-12 flex flex-col gap- py-4">
          <Link to="/">
            <img
              className="rounded-full cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
              src={Logo}
              alt="Logo"
            />
          </Link>
          <p>@Ihedoro</p>
        </div>
        <div className="flex md:flex-col gap-6 py-3 px-8">
          <div className="w-32 transform transition-transform duration-300 hover:scale-150">
            <img src={payments} alt="payments" />
          </div>
          <div className="flex gap-1 md:gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.social
                  className={`transition-transform duration-300 hover:scale-150 text-xl hover:text-${social.color} cursor-pointer`}
                  
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 py-9 md:py-3 ">
          <h3 className="font-bold text-lg ">Contact Us</h3>
          <div className="text-sm">
            <p>Victorial: Island, Lagos</p>
            <p>Mobile: +2348038852544</p>
            <p>Email: ihedfortune@gmail.com</p>
            <p>Whatsapp: +2348038852544</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 py-2 cursor-pointer">
          <h3 className="text-lg font-bold">Profile</h3>
          
          <a
            href="/account"
            className="text-sm flex gap-1 items-center transition-transform duration-300 hover:scale-150 hover:text-green-200"
          >
            <span>
              <TiUser />
            </span>
            My Account
          </a>
          <a
            href="/checkout"
            className="text-sm flex gap-1 items-center transition-transform duration-300 hover:scale-150 hover:text-green-200"
          >
            <span>
              <IoBagCheckOutline />
            </span>
            Checkout
          </a>
          <a
            href="/order-tracking"
            className="text-sm flex gap-1 items-center transition-transform duration-300 hover:scale-150 hover:text-green-200 "
          >
            <span>
              <MdSpatialTracking />
            </span>
            Order Tracking
          </a>
          <a
            href="/help-support"
            className="text-sm flex gap-1 items-center transition-transform duration-300 hover:scale-150 hover:text-green-200"
          >
            <span>
              <FaHandsHelping />
            </span>
            Help & Support
          </a>
        </div>
        <div className="flex flex-col py-2">
          <p>Subscribe</p>
          <form
            action=""
            className="flex gap-2 md:gap-2 md:flex-col shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-md"
          >
            <input
              type="email"
              placeholder="email"
              className="rounded-md py-2 px-1"
            />
            <button className="bg-gray-700 text-white rounded-lg hover:bg-[#17A349] hover:text-black py-2 px-4 md:px-1 focus:border-none text-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
