import React from "react";
import Icon from "../components/Icon";

import { IconContext } from "react-icons";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebook, FaTelegram, FaDiscord } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


import uem from "/assets/images/uem.png";
import acm from "/assets/images/acm.jpeg";
import { MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <IconContext.Provider value={{style: { fontSize: "1.5rem"}}}>
    <div className="relative z-20 text-gray-200 flex flex-col w-full bg-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start px-10 py-5 text-center sm:text-left gap-10">
        <div className="flex flex-col sm:justify-between gap-6">
          <p className="text-2xl">Follow Us</p>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/acehack2.0/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/acehack-2-0/">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/AceHack_uemj" target={"_blank"}>
            <FaTwitter />
            </a>
            <a href="https://t.me/acehack2" target={"_blank"}>
              <FaTelegram/>
            </a>
            <a href="https://discord.com/invite/RyUs94pSNT" target={"_blank"}>
              <FaDiscord/>
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:justify-between gap-1">
          <p className="text-2xl">Contact Us</p>
          <div className="flex">
          <AiOutlineMail />
          <a 
            href="mailto:sahitya.roy2020@uem.edu.in" target={"_blank"} >
            &nbsp;sahitya.roy2020@uem.edu.in
          </a>
          </div>
          <div className="flex"><MdCall/><p> +91 7584926589</p></div>
          <div className="flex"><MdCall/><p> +91 6202264540</p></div>
        </div>
        <div className="flex flex-col sm:justify-between">
          <p className="text-2xl">Organizing Body</p>
          <div className="flex">
            <Icon icon={uem} height={'h-16'}/>
            <Icon icon={acm} height={'h-16'}/>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-500 py-2 px-8 flex sm:flex-row flex-col items-center text-center justify-between gap-2">
        <div className="mx-32"></div>
        <div className="flex gap-2 flex-col sm:flex-row"> 
          <p>© 2023 Acehack 2.0</p>
          <p className="hidden sm:block">|</p>
          <p>All Rights Reserved</p>
        </div>
        <p>
        Designed By:&nbsp; <a href="https://github.com/kshitijv256" target={"_blank"} className="grad-text">Kshitij Verma</a> &
        <a href="https://github.com/thedevildude" target={"_blank"} className="grad-text"> Devdeep Ghosh</a>
        </p>
      </div>
    </div>
    </IconContext.Provider>
  );
};

export default Footer;
