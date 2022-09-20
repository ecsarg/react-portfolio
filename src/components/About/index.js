import React from 'react';
import aboutImage from '../../assets/about-me.jpg';

function About() {
    return (
      <section className="my-5">
        <h1 id="about">I'm Ellie! Welcome to my page!</h1>
        <img src={aboutImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        <div className="my-2">
          <p>
            I'm a recent graduate of the Vanderbilt University Coding Bootcamp looking for employment within the developer field. I got my start in technology while getting my undergrad degree at Auburn University working for the Academic Support office as their technology manager. I then pursued my master's degree in Occupational Therapy. My heart was always pulling me back to technology so I decided to take the plunge and go back to school and I am so glad I did. Enjoy browing some of my portfolio projects. In the footer below you can access my GitHub and LinkedIn.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;
