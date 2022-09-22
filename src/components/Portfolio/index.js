import React from 'react';
import RunBuddy from '../../assets/run-buddy.jpeg';
import PasswordGenerator from '../../assets/password-generator.png';
import DogAdoption from '../../assets/dog-adoption.png';
import RecordSwap from '../../assets/record-swap.png';
import FantasticUmbrella from '../../assets/fantastic-umbrella.png';
import WorkoutTracker from '../../assets/workout-tracker.png';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='row'>
        <div className='col-sm-6 col-md-3 col-lg-3'>
          <div>
            <img src={RunBuddy} alt='Run Buddy' className='card-img-top' />
            <div className='card-body text-center'>
              <a href='https://ecsarg.githubio/run-buddy' target='blank' rel='noreferrer'>
                <button>Run Buddy</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-3 col-lg-3'>
          <div>
            <img src={PasswordGenerator} alt='Password Generator' className='card-img-top' />
            <div className='card-body text-center'>
              <a href='https://ecsarg.github.io/password-generator/' target='blank' rel='noreferrer'>
                <button>Password Generator</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-3 col-lg-3'>
          <div>
            <img src={DogAdoption} alt='Dog Adoption Assistant' className='card-img-top' />
            <div className='card-body text-center'>
              <a href='https://westsideriley.github.io/Group-Project-1/' target='blank' rel='noreferrer'>
                <button>Dog Adoption Assistant</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-3 col-lg-3'>
          <div>
            <img src={RecordSwap} alt='The Record Swap' className='card-img-top' />
            <div className='card-body text-center'>
              <a href='https://gentle-stream-19606.herokuapp.com/' target='blank' rel='noreferrer'>
                <button>The Record Swap</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-3 col-lg-3'>
          <div>
            <img src={FantasticUmbrella} alt='Fantastic Umbrella' className='card-img-top' />
            <div className='card-body text-center'>
              <a href='https://github.com/ecsarg/fantastic-umbrella' target='blank' rel='noreferrer'>
                <button>E-commerce: Fantastic Umbrella</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-3 col-lg-3'>
          <div>
            <img src={WorkoutTracker} alt='Workout Tracker' className='card-img-top' />
            <div className='card-body text-center'>
              <a href='https://infinite-falls-51606.herokuapp.com/' target='blank' rel='noreferrer'>
                <button>Workout Tracker</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;