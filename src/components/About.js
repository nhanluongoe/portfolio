import React from 'react';
import hcmutLogo from '../assets/images/hcmut-logo.png';
import nguyenDuLogo from '../assets/images/nguyendu-logo.png';

const Education = () => {
  const School = ({ name, logo = null, degree, major, time, gpa = null }) => {
    if (gpa)
      return (
        <div className='flex py-2 pt-4 items-center'>
          <div className='w-1/6'>
            <h2 className='text-xs md:text-base'>{time}</h2>
          </div>
          <div className='pl-4 md:pl-0 w-5/6'>
            <div className='flex w-full'>
              <img
                className='h-10 hidden lg:block pr-4'
                src={logo}
                alt='logo'
              />
              <div>
                <h1 classname='text-xs'>{name}</h1>
                <h2 className='text-xs md:text-base'>
                  {degree}, <span className='italic'>{major}</span> - {gpa}
                </h2>
              </div>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div className='flex py-2 pt-4 items-center'>
          <div className='w-1/6'>
            <h2 className='text-xs md:text-base'>{time}</h2>
          </div>
          <div className='pl-4 md:pl-0 w-5/6'>
            <div className='flex w-full'>
              <img
                className='h-10 hidden lg:block pr-4'
                src={logo}
                alt='logo'
              />
              <div>
                <h1 classname='text-xs'>{name}</h1>
                <h2 className='text-xs md:text-base'>
                  {degree}, <span className='italic'>{major}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      );
  };

  return (
    <div className='w-full'>
      <p className='py-3 text-lg md:text-3xl font-bold'>Education</p>
      <School
        name='Ho Chi Minh city University of Technology'
        logo={hcmutLogo}
        degree='Bachelor of Engineering'
        major='Computer Science'
        time='2018 - Present'
        gpa='8.467'
      />
      <School
        name='Ho Chi Minh city University of Technology'
        logo={hcmutLogo}
        degree='Bachelor of Engineering'
        major='Electrical & Electronic Engineering'
        time='2013 - 2018'
        gpa='7.35'
      />
      <School
        name='Nguyen Du Daklak Specialized High School'
        logo={nguyenDuLogo}
        degree='High School Diploma'
        major='Physics'
        time='2010 - 2013'
      />
    </div>
  );
};

const Skills = () => {
  const Skill = ({ language }) => {
    return (
      <span className='p-0.5 md:p-1 text-xs md:text-base rounded border-2 border-gray-400'>
        {language}
      </span>
    );
  };

  return (
    <div className='w-full'>
      <p className='py-5 text-lg md:text-3xl font-bold'>Skills</p>
      <p className='py-1 text-small md:text-md md:py-2'>
        Programming Languages: <Skill language='Javascript' />,{' '}
        <Skill language='Python' />, <Skill language='HTML/CSS' />,{' '}
        <Skill language='C/C++' />
      </p>
      <p className='py-1 text-small md:text-md md:py-2'>
        Frameworks & Libraries: <Skill language='NodeJS' />,{' '}
        <Skill language='ReactJS/Redux' />, <Skill language='Express' />
      </p>
      <p className='py-1 text-small md:text-md md:py-2'>
        Database: <Skill language='MySQL' />, <Skill language='MongoDB' />
      </p>
      <p className='py-1 text-small md:text-md md:py-2'>
        Tools & Methods: <Skill language='Git' />, <Skill language='Docker' />
        , <Skill language='Scrum/Agile' />
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full px-5 text-sm md:text-xl'>
      <div className='h-full w-full flex'>
        <Education />
      </div>
      <div>
        <hr className='w-1/2 mx-auto' />
      </div>
      <div className='h-full w-full flex'>
        <Skills />
      </div>
    </div>
  );
};

export default About;
