import React from 'react'
import Header from '../components/Header';
import {FaLaptopCode} from 'react-icons/fa';
function Projects() {
  return (
    <div>
      <Header />
      <div className='container projects-intro'>
        <div className='row flex-with-center mt-5'>
          <div className='col-md-6 n-box2 px-3 py-5'>
            <div>
              <h1 className='font-bold'>Projects</h1>
              <p className='font-bold'>Good ideas are not adopted automatically. they must be driven into practice with courageous patience</p>
              <button className='primary-button'>Get Started</button>
            </div>

          </div>

          <div className='col-md-6 position-relative'>

            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#0F62FE" d="M40.6,-69.4C54.7,-62.2,69.6,-55.5,77.1,-44C84.5,-32.5,84.5,-16.3,84.7,0.1C84.9,16.5,85.4,33.1,79.1,46.5C72.8,59.9,59.6,70.3,45.3,78.6C31,87,15.5,93.4,1.1,91.4C-13.2,89.4,-26.4,79.1,-40.6,70.6C-54.7,62.1,-69.7,55.5,-79.4,44.1C-89,32.6,-93.3,16.3,-91.6,1C-89.8,-14.3,-82,-28.6,-72.4,-40C-62.7,-51.5,-51.3,-60.3,-38.9,-68.5C-26.6,-76.7,-13.3,-84.4,0,-84.4C13.3,-84.4,26.5,-76.6,40.6,-69.4Z" transform="translate(100 100)" />
            </svg>
            <FaLaptopCode 
            color='white'
            size='180'
            className='position-absolute top-50 start-50 translate-middle' />
          </div>
        </div>
      </div>

      <div className='container projects-list'>
        <h3 className='font-bold'>Take a look to our projects</h3>
        <hr/>
      </div>

    </div>
  )
}

export default Projects;