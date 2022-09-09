import React from 'react';
import ContactForm from '../Contact';

function Nav() {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h2><a class="navbar-brand" href="/">Ellie Sargent</a></h2>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">About Me <span class="sr-only"></span></a>
      <a class="nav-item nav-link" href="../Contact" component={ContactForm}>Contact Me </a>
      <a class="nav-item nav-link" href="../Portfolio">Portfolio </a>
      <a class="nav-item nav-link" href="../Resume">Resume</a>
    </div>
  </div>
</nav>
        )
    }
  
  export default Nav;
  