import React from 'react'
import Courosal from '../components/courosal';
import Header from '../components/Header';
function Home() {
  return (
    <div>
      <Header />
      <div className='introduction flex-with-center' style={{ backgroundImage: `url('./circle-scatter-haikei.svg')` }}>

        <div>
          <h1>Majd</h1>

          <div className='intro-content d-flex justify-content-between'>
            <p>MERN Stack <br /> Developer</p>
            <button className='primary-button font-bold w-50'>Get Started</button>
          </div>
        </div>

      </div>

      <Courosal />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#001220" fill-opacity="1" d="M0,160L26.7,160C53.3,160,107,160,160,138.7C213.3,117,267,75,320,80C373.3,85,427,139,480,176C533.3,213,587,235,640,224C693.3,213,747,171,800,170.7C853.3,171,907,213,960,213.3C1013.3,213,1067,171,1120,176C1173.3,181,1227,235,1280,234.7C1333.3,235,1387,181,1413,154.7L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='n-box2 p-5 font-bold' >
              <h1>Yes you are right ...</h1>
              <br />
              <p>I am  a Javascript Buff ...</p>
            </div>

          </div>

        </div>

        <div className='row pt-5 justify-content-center'>
          <div className='col-md-4'>
            <div>
              <img src='./js.png' alt='this is tech logo' height='200' className='w-100'></img>
            </div>

          </div>

        </div>

        <div className='row pt-5 justify-content-end'>
          <div className='col-md-4'>
            <div className='n-box2 p-5 font-bold' >
              <p>Javascript is one of the most top-ranked programming languages
                because of its ubiquitous use on all platforms and mass
                adoption. main Use Cases: Web Development.
              </p>
            </div>

          </div>

        </div>

      </div>

      <div className='devstack container my-5 n-box2 py-5'>

        <div className='text-center'>
          <h3 className='font-bold text-center'>My Development Stack</h3>
          <hr/>
          {/* <img src='./developer.jpg' alt='' height='200' width='200' ></img> */}
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <div className='font-bold'>
              <h3 className='font-bold'>Front End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>ReactDom</p>
              <p>Redux</p>

            </div>

          </div>

          <div className='col-md-4'>
            <div className='font-bold text-center'>
              <h3 className='font-bold'>UI/Styling</h3>
              <hr />
              <p>Material UI</p>
              <p>Bootstrap</p>
              <p>AntDesign</p>
              <p>Semantic UI</p>

            </div>

          </div>


          <div className='col-md-4'>
            <div className='font-bold text-end'>
              <h3 className='font-bold'>BackEnd/DB</h3>
              <hr />
              <p>Node js</p>
              <p>Express js</p>
              <p>Mongo DB</p>
              <p>SQL</p>

            </div>

          </div>


        </div>
      </div>

      <div className='who-is-majd' style={{backgroundImage:`url('/who-im')`}}>


      </div>

    </div>
  )
}

export default Home;