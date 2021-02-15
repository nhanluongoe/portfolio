import React from 'react';

const Item = ({ name, time, desc, teamsize, res, stack, src }) => {
  return (
    <div className='border-4 border-dotted rounded-2xl ring-4 ring-gray-300 ring-opacity-50 ring-offset-2 p-1'>
      <h1 className='font-bold text-sm md:text-base p-1'>
        {name}, {time}
      </h1>
      <h1 className='text-xs md:text-sm italic'>{desc}</h1>
      <p className='text-xs md:text-sm p-0.5'>
        <i class='fas fa-users md:hidden'></i>
        <span className='hidden md:inline-block font-semibold'>
          Team Size
        </span>: {teamsize}
      </p>
      <p className='text-xs md:text-sm p-0.5'>
        <i class='fas fa-terminal md:hidden'></i>
        <span className='hidden md:inline-block font-semibold'>
          Responsibilities
        </span>
        : {res}
      </p>
      <p className='text-xs md:text-sm p-0.5'>
        <i class='fas fa-layer-group md:hidden'></i>
        <span className='hidden md:inline-block font-semibold'>
          Tech Stacks
        </span>
        : {stack}
      </p>
      {/* TODO: Source code */}
    </div>
  );
};

const Projects = () => {
  return (
    <div className='grid grid-cols-1 gap-1 md:gap-4 md:grid-cols-2 m-2 p-2'>
      <Item
        name='Personal Page'
        time='Jan 2021'
        desc='Self-studying React project'
        teamsize='1'
        res='Design & Programming'
        stack='React'
      />
    </div>
  );
};

export default Projects;
