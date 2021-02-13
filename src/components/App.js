import React from 'react';
import { Router, Route } from 'react-router-dom';
import '../assets/main.css';
import Header from './Header';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import history from '../history';

const App = () => {
  return (
    <div className='font-mono'>
      <Router history={history}>
        <div className='flex justify-between'>
          <div className='p-4 h-screen w-2/12 bg-gray-700'>
            <Header />
          </div>
          <div className='p-4 h-screen w-10/12'>
            <Route path='/portfolio' exact component={Home} />
            <Route path='/skills' exact component={Skills} />
            <Route path='/projects' exact component={Projects} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
