import React from 'react';
import { Router, Route } from 'react-router-dom';
import '../assets/main.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import history from '../history';

const App = () => {
  return (
    <div className='font-mono'>
      <Router history={history}>
        <div className='flex justify-between'>
          <div className='p-4 h-screen w-1/6 bg-gray-700'>
            <Header />
          </div>
          <div className='p-4 h-100 w-5/6'>
            <Route path='/portfolio' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/projects' exact component={Projects} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
