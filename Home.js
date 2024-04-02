import React from 'react'
import '../App.css'
import Recomended from './Recomended'
import Upcoming from './Upcoming'
function Home() {
  return (
    <div className='temp'>
      <div>
        <h2 style={{ margin: '50px', fontSize: '49px', color: 'white' }} >Discover Exciting Events Happening Near You - Stay Tuned for Updates</h2>
        <p style={{ margin: '50px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quasi et amet? Omnis nesciunt itaque in soluta quas cumque quasi!</p>
      </div>
      <Recomended />
      <Upcoming style={{ margin: 'auto' }} />

    </div>
  )
}

export default Home