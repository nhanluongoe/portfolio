import React from 'react';
import avatar from '../assets/images/avatar.png';
// import { bio } from '../assets/text';

const Home = () => {
  return (
    <div>
      <div className='container hidden md:flex py-5 mb-10 justify-center'>
        <h1 className='md:text-7xl'>Welcome</h1>
      </div>
      <div className='container md:flex justify-between items-center'>
        <div className='px-3 md:w-1/3'>
          <div>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
        <div className='px-3 md:w-2/3 text-lg md:text-xl'>
          <h1 className='text-center text-2xl md:text-4xl py-10'>
            Luong Thanh Nhan
          </h1>
          <p className='py-2'>
            I am currently pursuing a degree in Computer Science at Ho Chi Minh
            City University of Technology where I also got a Bachelor of
            Engineering in the major of Electrical and Electronic Engineering
          </p>
          <p className='py-2'>
            I am both interested in frontend and backend development, so I am
            learning to be a fullstack developer in the near future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
