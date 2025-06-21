import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10  border-t dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3 text-black dark:text-white">MindNest</h2>
          <p className="text-sm">
            Visualize your thoughts, collaborate with your team, and organize your ideas with ease.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-black dark:text-white">Product</h3>
          <ul className="space-y-1 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Roadmap</li>
            <li>Updates</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-black dark:text-white">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-black dark:text-white">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Facebook className="hover:text-blue-600 cursor-pointer" size={20} />
            <Twitter className="hover:text-blue-400 cursor-pointer" size={20} />
            <Linkedin className="hover:text-blue-700 cursor-pointer" size={20} />
            <Github className="hover:text-gray-800 dark:hover:text-white cursor-pointer" size={20} />
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} MindNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
