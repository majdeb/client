import React from 'react'

import { FaAngular, FaBootstrap, FaCss3, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
function courosal() {
  return (
    <div className='courosel-parent position-relative'>
      <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>Technologes I Use</h1>


      <div className='gallary'>

        <span style={{'--i' : 1}}>
          <FaReact color='cyan'/>
        </span>
        <span style={{'--i' : 2}}>
          <FaAngular color='orangered'/>
        </span>
        <span style={{'--i' : 3}}>
          <FaJava color='orange'/>
        </span>
        <span style={{'--i' : 4}}>
          <FaNodeJs color='green'/>
        </span>
        <span style={{'--i' : 5}}>
          <FaBootstrap color='blue'/>
        </span>
        <span style={{'--i' : 6}}>
          <FaJsSquare color='yellow'/>
        </span>
        <span style={{'--i' : 7}}>
          <FaHtml5 color='orange'/>
        </span>
        <span style={{'--i' : 8}}>
          <FaCss3 color='blue'/>
        </span>
      </div>
     

      </div>
      )



    

    
}

export default courosal