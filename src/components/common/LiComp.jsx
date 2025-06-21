import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const LiComp = ({ e }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(e.Children);

  return (
    <li
      className="relative px-4 py-2 cursor-pointer group text-base font-semibold tracking-wide"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1 text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition duration-300">
        {e.name}
        {hasChildren &&
          (open ? (
            <ChevronUp size={18} className="transition-transform" />
          ) : (
            <ChevronDown size={18} className="transition-transform" />
          ))}
      </div>

      {hasChildren && (
        <ul
          className={`absolute top-full left-0 mt-4 w-56 bg-white dark:bg-[#1e1e2f] backdrop-blur-lg shadow-2xl rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out transform ${
            open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
          }`}
        >
          {e.Children.map((child, index) => (
            <li
              key={index}
              className="px-5 py-2 text-gray-700 dark:text-gray-100 hover:bg-red-100 dark:hover:bg-red-800 hover:text-red-700 dark:hover:text-white transition-all duration-200 rounded-lg"
            >
              {child.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default LiComp;
