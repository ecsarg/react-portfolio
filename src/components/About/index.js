import React from 'react';
import aboutImage from '../../assets/about-me.jpg';

function About() {
    return (
      <section>
        <div class="row">
                        <div class="col-md-4 how-img">
                            <img src={aboutImage} class="my-2" style={{ width: "30vw", height: "46vw" }} alt="cover"/>
                        </div>
                        <div class="col-md-8">
                            <h1>Hi! I'm Ellie. Welcome to my portfolio!</h1>
                        <p>I'm a recent graduate of the Vanderbilt University Coding Bootcamp looking for employment within the developer field. I got my start in technology while getting my undergrad degree at Auburn University working for the Academic Support office as their technology manager. I then pursued my master's degree in Occupational Therapy. My heart was always pulling me back to technology so I decided to take the plunge and go back to school and I am so glad I did. Enjoy browing some of my portfolio projects. In the footer below you can access my GitHub and LinkedIn.</p>
                        </div>
                    </div>
      </section>
    );
  }
  
  export default About;
