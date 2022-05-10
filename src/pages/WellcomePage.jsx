import React from 'react'
import { login } from '../utils'
import greeting from '../assets/greeting.png'
import './wellcomePage.css'

const WellcomePage = () => {
  return (
    <div>
        <h1>Hey, young fellow!</h1>
        <img style={{height: 250, width: 250}} src={greeting}/>
        <h2>No need subscription, pay for time only</h2>
          <button className='login__button' onClick={login}>Log in</button>
    </div>
  )
}

export default WellcomePage