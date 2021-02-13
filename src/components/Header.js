import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex flex-col h-full justify-between items-center text-sm md:text-lg'>
      <div>
        <ul className='py-5'>
          <li className='p-3 text-gray-200 hover:text-white transform hover:scale-110 transition duration-500 ease-in-out'>
            <Link to='/portfolio'>Home</Link>
          </li>
          <li className='p-3 text-gray-200 hover:text-white transform hover:scale-110 transition duration-500 ease-in-out'>
            <Link to='/about'>About</Link>
          </li>
          <li className='p-3 text-gray-200 hover:text-white transform hover:scale-110 transition duration-500 ease-in-out'>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
      </div>
      <div className='text-gray-200 '>
        <h1 className='pb-5 text-2xl'>Find me:</h1>
        <p className='text-5xl text-center py-2 hover:text-white transfrom hover:scale-110 transition duration-300 ease-in-out'>
          <a
            href='https://github.com/nhanluongoe'
            target='_blank'
            rel='noreferrer'
          >
            <i class='fab fa-github'></i>
          </a>
        </p>
        <p className='text-5xl text-center py-2 hover:text-white transfrom hover:scale-110 transition duration-300 ease-in-out'>
          <a
            href='https://www.linkedin.com/in/nhanlt18/'
            target='_blank'
            rel='noreferrer'
          >
            <i class='fab fa-linkedin'></i>
          </a>
        </p>
        <p className='text-5xl text-center py-2 hover:text-white transfrom hover:scale-110 transition duration-300 ease-in-out'>
          <a
            href='https://www.facebook.com/anothername18/'
            target='_blank'
            rel='noreferrer'
          >
            <i class='fab fa-facebook'></i>
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Header;
