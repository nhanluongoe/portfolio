import React from 'react';
import hcmutLogo from '../assets/images/hcmut-logo.png';
import nguyenDuLogo from '../assets/images/nguyendu-logo.png';

const Education = () => {
  const School = ({ name, logo = null, degree, major, time, gpa = null }) => {
    if (gpa)
      return (
        <div className='flex py-2 pt-4 items-center'>
          <div className='w-1/6'>
            <h1>{time}</h1>
          </div>
          <div className='w-5/6'>
            <div className='flex w-full'>
              <img
                className='h-10 hidden lg:block pr-4'
                src={logo}
                alt='logo'
              />
              <div>
                <h1>{name}</h1>
                <h2 className='text-sm'>
                  {degree}, {major} - {gpa}
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
            <h1>{time}</h1>
          </div>
          <div className='w-5/6'>
            <div className='flex w-full'>
              <img
                className='h-10 hidden lg:block pr-4'
                src={logo}
                alt='logo'
              />
              <div>
                <h1>{name}</h1>
                <h2 className='text-sm'>
                  {degree}, {major}
                </h2>
              </div>
            </div>
          </div>
        </div>
      );
  };

  return (
    <div className='w-full'>
      <p className='py-3 text-md md:text-3xl font-bold'>Education</p>
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
      <span className='p-1 rounded border-2 border-gray-400'>{language}</span>
    );
  };

  return (
    <div>
      <p className='py-5 text-md md:text-3xl font-bold'>Skills</p>
      <p className='py-2'>
        Programming Languages: <Skill language='Javascript' />,{' '}
        <Skill language='Python' />, <Skill language='HTML/CSS' />
      </p>
      <p className='py-2'>
        Frameworks & Libraries: <Skill language='NodeJS' />,{' '}
        <Skill language='ReactJS/Redux' />
      </p>
      <p className='py-2'>
        Database: <Skill language='MySQl' />, <Skill language='MongoDB' />
      </p>
      <p className='py-2'>
        Tools and Methods: <Skill language='Git' />, <Skill language='Docker' />
        , <Skill language='Scrum/Agile' />
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div className='container flex flex-col justify-center h-full px-5'>
      <div className='h-1/2 flex justify-start'>
        <Education />
      </div>
      <hr className='w-1/2 mx-auto' />
      <div className='h-1/2 flex justify-start'>
        <Skills />
      </div>
    </div>
  );
};

export default About;
