import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../assets/main.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
// import history from '../history';

const App = () => {
  return (
    <div className=''>
      <Router>
        <div className='flex h-screen justify-between'>
          <div className='p-4 w-1/6 bg-gray-700'>
            <Header />
          </div>
          <div className='py-4 pb-10 w-5/6 px-4'>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/projects' exact component={Projects} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
