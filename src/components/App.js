import React from 'react';
import { Router, Route } from 'react-router-dom';
import '../assets/main.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route path='/about' exact component={About} />
          <Route path='/projects' exact component={Projects} />
        </div>
      </Router>
    </div>
  );
};

export default App;
