import React from 'react';


function About() {
    return (
        <section id='about'>
            <div className='row'>
                <div className='two columns'>
                <h2 id='about'>About Me!</h2>
                    <img className='about-me-pic' src='components/images/about-me.jpg' alt='' />
                    <p>
                 I am an entry level full stack developer who is excited to pursue my new career in web development! Before web development, I worked as an Occupational Therapist within the hospital setting. I am also passionate about health and wellness. In my free time, I enjoy spending time with my two dogs, Lucille and Paisley, as well as working out.
                </p>
                </div>
            </div>
        </section>
    );
}

export default About;