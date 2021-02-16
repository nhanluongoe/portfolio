import React from 'react';

const Item = ({ name, time, desc, teamsize, res, stack, src }) => {
  return (
    <div className='rounded-2xl p-2'>
      <h1 className='font-bold text-sm md:text-base p-1 bg-gray-700 text-gray-100 text-center rounded-2xl mb-2'>
        {name}, {time}
      </h1>
      <h1 className='text-xs md:text-sm text-center text-gray-500 mb-1'>
        {desc}
      </h1>
      <p className='text-xs md:text-sm p-0.5'>
        <i class='fas fa-users md:hidden pr-0.5'></i>
        <span className='hidden md:inline-block font-semibold'>
          Team Size
        </span>: {teamsize}
      </p>
      <p className='text-xs md:text-sm p-0.5'>
        <i class='fas fa-terminal md:hidden pr-0.5'></i>
        <span className='hidden md:inline-block font-semibold'>Role</span>:{' '}
        {res}
      </p>
      <p className='text-xs md:text-sm p-0.5'>
        <i class='fas fa-layer-group md:hidden pr-0.5'></i>
        <span className='hidden md:inline-block font-semibold'>
          Tech Stacks
        </span>
        : {stack}
      </p>
      {/* TODO: Source code */}
      <p className='text-xs md:text-sm p-0.5'>
        <i class='fas fa-external-link-square-alt md:hidden pr-0.5'></i>
        <span className='hidden md:inline-block font-semibold'>
          Source
        </span>:{' '}
        <a
          className='italic text-gray-600'
          href={`https://${src}`}
          target='_blank'
          rel='noreferrer'
        >
          {src}
        </a>
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='grid grid-cols-1 gap-1 md:gap-4 md:grid-cols-2 m-2 p-2'>
      <Item
        name='Portfolio'
        time='Jan 2021'
        desc='Built a Porfolio using React as a self-studying project'
        teamsize='1'
        res='Design & Programming'
        stack='React'
        src='github.com/nhanluongoe/portfolio'
      />
      <Item
        name='Quizverse'
        time='Oct - Dec 2019'
        desc='Built a website which supports lecturers in storing and managing courses, topics, questions; generating exams and exporting to PDF file'
        teamsize='2'
        res='Design & Programming'
        stack='PHP, MySQL, Bootstrap 4'
        src='github.com/gaugau147/web-programming-191'
      />
    </div>
  );
};

export default Projects;
