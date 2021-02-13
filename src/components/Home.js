import React from 'react';
import avatar from '../assets/images/avatar.png';

const Welcome = () => {
  return (
    <div className='container hidden md:flex py-5 mb-10 justify-center'>
      <h1 className='md:text-7xl'>Welcome!</h1>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className='px-3 md:w-1/3'>
      <div>
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  );
};

const Bio = () => {
  return (
    <div className='px-3 md:w-2/3 text-lg md:text-xl'>
      <h1 className='text-2xl md:text-4xl py-10'>Luong Thanh Nhan</h1>
      <p className='py-2'>
        I am currently pursuing a degree in Computer Science at Ho Chi Minh City
        University of Technology where I previously got a Bachelor of
        Engineering in the major of Electrical and Electronic Engineering
      </p>
      <p className='py-2'>
        I am both interested in frontend and backend development, so I am
        learning to be a fullstack developer in the near future.
      </p>
    </div>
  );
};

const Quote = ({ content, author }) => {
  return (
    <div className='container flex flex-col justify-center px-4 text-gray-500 h-full'>
      <p className='text-xl italic'>{content}</p>
      <p className='text-3xl'> _ {author}</p>
    </div>
  );
};

const Home = () => {
  const quote = {
    content:
      '"No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have."',
    author: 'Seneca',
  };

  return (
    <div className='flex flex-col h-full'>
      <Welcome />
      <div className='container md:flex justify-between items-center'>
        <Avatar />
        <Bio />
      </div>
      <hr className='w-3/4 mx-auto my-8' />
      <Quote content={quote.content} author={quote.author} />
    </div>
  );
};

export default Home;
