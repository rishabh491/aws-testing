import React from 'react';
import LiComp from './LiComp';
import logo from '/src/assets/AppLogo.png'; // adjust if needed

const Headers = () => {
  const navData = [
    {
      name: 'Email & Collaboration Company',
      Children: [
        { name: 'Cloud Services' },
        { name: 'Email & Collaboration Company' },
        { name: 'Marketing' },
      ],
    },
    {
      name: 'Services',
      Children: [
        { name: 'Cloud Services' },
        { name: 'Survey Clouds' },
        { name: 'GCP' },
      ],
    },
    { name: 'Contact Us' },
    { name: 'About Us' },
  ];

  return (
    <div className="w-full h-[100px] bg-white dark:bg-black text-black dark:text-white shadow-md">
      <div className="flex justify-between items-center h-[100%] w-[90%] mx-auto">
        <div className="w-[15%] flex items-center justify-center">
          <img className="h-16 object-contain" src={logo} alt="Logo" />
          <text className='font-bold font-italic' >MindNest</text>
        </div>

        <nav className="w-[65%]">
          <ul className="flex justify-between items-center  text-[16px] font-semibold tracking-wide">
            {navData.map((e, i) => (
              <LiComp key={i} e={e} />
            ))}
          </ul>
        </nav>

        <div className="w-[13%] flex justify-end">
          <button className="rounded-full w-full h-[40px] bg-red-500 text-white hover:bg-red-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
