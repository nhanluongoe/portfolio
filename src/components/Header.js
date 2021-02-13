import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex flex-col items-center text-sm md:text-lg'>
      <div>
        <ul className='py-5'>
          <li className='p-3 text-gray-500 hover:text-gray-400 transform hover:scale-110 transition duration-500 ease-in-out'>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-3 text-gray-500 hover:text-gray-400 transform hover:scale-110 transition duration-500 ease-in-out'>
            <Link to='/skills'>Skills</Link>
          </li>
          <li className='p-3 text-gray-500 hover:text-gray-400 transform hover:scale-110 transition duration-500 ease-in-out'>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
