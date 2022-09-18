import React from 'react';
import RunBuddy from '../../assets/large/run-buddy.jpeg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='row row-cols-1 row-cols-sm-2 rows-cols-md-2 rows-cols-lg-3 g-4'>
        <div className='col'>
          <div className='card'>
            <img src={RunBuddy} alt='Run Buddy' className='card-img-top' />
            <div className='card-body'>
              <a href='https://'
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
