import React from 'react'

import './portfolio.scss'

function Portfolio() {
  return(
    <div id='portfolio'>
      <div className='content'>
        <h1 className='titre'>
          Je suis le suis portfolio
        </h1>
        <hr />
        <div id='portfolio-card'>
          <a href='https://determined-perlman-ef7595.netlify.app/' target='blank'>Kalees</a>
          <a href='https://eloquent-edison-81ade5.netlify.app/' target='blank'>Pokedex</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;