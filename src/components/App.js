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
        <div className='relative flex justify-between'>
          <div className='p-4 h-screen w-1/6 bg-gray-700 fixed'>
            <Header />
          </div>
          <div className='py-4 pb-10 h-screen w-screen'>
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
