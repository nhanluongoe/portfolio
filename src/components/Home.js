import React from 'react';
import avatar from '../assets/images/avatar.png';

const Welcome = () => {
  return (
    <div className='container hidden md:flex mb-4 lg:mb-10 py-5 justify-center'>
      <h1 className='md:text-7xl'>Welcome!</h1>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className='px-3 md:w-1/4 flex flex-col justify-center items-center md:content'>
      <img
        className='h-1/2 w-1/2 md:h-full md:w-full '
        src={avatar}
        alt='avatar'
      />
      <div className='text-xs md:text-base text-gray-500 pt-1 md:pt-3'>
        <h3 className='relative p-0.5 md:p-1'>
          <span className='absolute -left-6'>
            <i class='fas fa-envelope'></i>
          </span>
          nhanlt18@gmail.com
        </h3>
        <h3 className='relative p-0.5 md:p-1'>
          <span className='absolute -left-6'>
            <i class='fas fa-mobile'></i>
          </span>
          (+84)342-575-569
        </h3>
      </div>
    </div>
  );
};

const Bio = () => {
  return (
    <div className='px-3 md:w-1/2 text-lg lg:text-xl'>
      <h1 className='text-2xl md:text-4xl text-center md:text-left py-2'>
        Luong Thanh Nhan
      </h1>
      <h2 className='text-base md:text-3xl text-center md:text-left pb-5 text-gray-500'>
        Third-Year Student - HCMUT
      </h2>
      <p className='py-2 text-base sm:text-base text-justify'>
        I am currently pursuing a degree in Computer Science at Ho Chi Minh City
        University of Technology where I previously got a Bachelor of
        Engineering in the major of Electrical and Electronic Engineering
      </p>
      <p className='py-2 text-base sm:text-base text-justify'>
        I am both interested in frontend and backend development, so I am
        learning to be a fullstack developer in the near future.
      </p>
    </div>
  );
};

const Quote = ({ content, author }) => {
  return (
    <div className='hidden lg:block mx-auto md:w-3/4 px-4 text-gray-500'>
      <p className='text-xs md:text-base lg:text-md italic text-justify'>
        {content}
      </p>
      <p className='text-xs md:text-2xl'>
        {' '}
        <span>
          <i class='fas fa-feather-alt'></i>
        </span>
        {'_'}
        {author}
        {'_'}
      </p>
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
    <div className='flex flex-col md:w-5/6'>
      <Welcome />
      <div className='md:flex justify-around items-center'>
        <Avatar />
        <Bio />
        <p className='md:hidden px-3 py-3 text-xs text-justify italic text-gray-500'>
          {quote.content},{' '}
          <span>
            <i class='fas fa-feather-alt'></i>
          </span>
          _Seneca_
        </p>
      </div>
      <hr className='hidden lg:block w-3/4 mx-auto my-4 md:my-8' />
      <Quote content={quote.content} author={quote.author} />
    </div>
  );
};

export default Home;
