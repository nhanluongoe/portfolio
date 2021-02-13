import React from 'react';
import hcmutLogo from '../assets/images/hcmut-logo.png';
import nguyenDuLogo from '../assets/images/nguyendu-logo.png';

const Education = () => {
  const School = ({ name, logo = null, degree, major, time, gpa = null }) => {
    if (gpa)
      return (
        <div className='flex py-2 pt-4'>
          <div className='relative w-1/5'>
            <h1>{time}</h1>
            <img
              className='absolute top-0 left-40 h-full hidden lg:block'
              src={logo}
              alt='logo'
            />
          </div>
          <div className='w-4/5'>
            <h1>{name}</h1>
            <h2>
              {degree}, {major} - {gpa}
            </h2>
          </div>
        </div>
      );
    else
      return (
        <div className='flex py-2 pt-4'>
          <div className='relative w-1/5'>
            <h1>{time}</h1>
            <img
              className='absolute top-0 left-40 h-full hidden lg:block'
              src={logo}
              alt='logo'
            />
          </div>
          <div className='w-4/5'>
            <h1>{name}</h1>
            <h2>
              {degree}, {major}
            </h2>
          </div>
        </div>
      );
  };

  return (
    <div>
      <p className='py-3 text-md md:text-2xl'>Education</p>
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
  return (
    <div>
      <p className='py-3 text-md md:text-2xl'>Skills</p>
      <h1>Programming Languages: Javascript, Python, HTML/CSS</h1>
      <h1>Frameworks & Libraries: NodeJS, ReactJS/Redux</h1>
      <h1>Database: MySQl, MongoDB</h1>
      <h1>Tools and Methods: Git, Docker, Scrum/Agile</h1>
    </div>
  );
};

const About = () => {
  return (
    <div className='container flex flex-col h-full justify-start px-5'>
      <div className='h-1/2'>
        <Education />
      </div>
      <hr className='w-1/2 mx-auto' />
      <div className='h-1/3'>
        <Skills />
      </div>
    </div>
  );
};

export default About;
