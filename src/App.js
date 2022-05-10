import 'regenerator-runtime/runtime'
import React from 'react'
import './global.css'
import WellcomePage from './pages/WellcomePage'
import UserCard from './components/UserCard'
import Gym from './components/Gym'
import Info from './components/Info'

export default function App() {

  if (!window.walletConnection.isSignedIn()) {
    return (
      <WellcomePage />
    )
  }

  return (
    <>
      <div style={{display: 'flex'}} className='blocks__wrapper'>
        <UserCard />
        <Gym />
      </div>
      <Info />
    </>
  )
}
