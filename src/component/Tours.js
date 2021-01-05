import React from 'react';
import './Tours.css';
import TourItem from './TourItem';
import  img9 from '../assets/images/img-9.jpg'
import  img2 from '../assets/images/img-2.jpg'
import  img3 from '../assets/images/img-3.jpg'
import  img4 from '../assets/images/img-4.jpg'
import  img8 from '../assets/images/img-8.jpg'

function Tours() {
  return (
    <div className='tours'>
      <h1>Explore the Beautiful Destinations</h1>
      <div className='tours__container'>
        <div className='tours__wrapper'>
          <ul className='tours__items'>
            <TourItem
              src={img9}
              text='Explore the hidden island of maldives'
              label='Island'
              path='/services'
            />
            <TourItem
              src={img2}
              text='Beautiful himalaya journey '
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='tours__items'>
            <TourItem
              src={img3}
              text='Explore the beauty of Moscow'
              label='City life'
              path='/services'
            />
            <TourItem
              src={img4}
              text='Cruise Tour in the lap of nature'
              label='Luxury'
              path='/products'
            />
            <TourItem
              src={img8}
              text='Explore venice city'
              label='Budget Trip'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tours;