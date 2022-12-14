import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <Header />
          <main>
              <Route exact path='/' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/resume' component={Resume} />
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
};

export default App;
