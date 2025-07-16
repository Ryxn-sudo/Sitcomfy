'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Facebook, Instagram } from 'lucide-react';

const SOCIALS = [
  {
    name: 'Whatsapp',
    href: 'https://api.whatsapp.com/send?phone=+112067101079&text=Save%20this%20to%20your%20Favorites%20-%20@wilsondesouza',
    color: '#128c7e',
    icon: MessageCircle,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    color: '#3b5998',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    color: 'linear-gradient(45deg, #405de6, #5b51db, #b33ab4, #c135b4, #e1306c, #fd1f1f)',
    icon: Instagram,
    isGradient: true,
  },
];

const SocialIconList = () => {
  return (
    <ul className="flex justify-center items-center list-none">
      {SOCIALS.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <li key={index} className="relative mx-[10px] group">
            <Link
              aria-label={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white text-[#4d4d4d] transition-all duration-300 ease-in-out hover:shadow-[3px_2px_45px_0px_rgba(0,0,0,0.12)] hover:text-white"
            >
              <div
                className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 ease-in-out group-hover:h-full"
                style={{ background: social.color }}
              ></div>
              <div className="relative z-[1]">
                <IconComponent size={30} />
              </div>
            </Link>
            <div
              className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-white px-[10px] py-[6px] rounded-[5px] text-[14px] opacity-0 invisible transition-all duration-300 ease group-hover:opacity-100 group-hover:visible group-hover:top-[-50px]"
              style={{ background: social.color }}
            >
              {social.name}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIconList;
