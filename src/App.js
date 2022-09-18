import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <Header />
          <main>
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/portfolio' component={Portfolio} />
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
};

export default App;