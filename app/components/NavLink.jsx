// In your NavLink component
import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
        const offset = 100;
      window.scrollTo({
        top: target.offsetTop-offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a onClick={handleClick} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white" href={href}>
      {title}
    </a>
  );
};

export default NavLink;
