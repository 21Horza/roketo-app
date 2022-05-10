import React, {useState} from 'react'
import './usercard.css'
import user1 from '../assets/user1.png'
import PaymentModal from '../modals/PaymentModal'
import DepositModal from '../modals/DepositModal'
import { logout } from '../utils'


const UserCard = () => {
  const [modalActive, setModalActive] = useState(false)
  const [modalDeposit, setModalDeposit] = useState(false)

  return (
    <>
      <div className='user__container'>
          <div className='user__card'>
              <div className='card__block'>
                  <img src={user1}/>
              </div>
              <h3>{window.accountId}</h3>
              <p> Male | Born 05.17.2001</p>
              <hr />
              <p>Status: Active </p>
          </div>
            <button className='deposit__button' onClick={() => setModalDeposit(true)}>Deposit NEAR</button>
            <button className='start__button' onClick={() => setModalActive(true)}>Start</button>
            <button className="link signout__button" onClick={logout}> Sign out </button>
      </div>
      <DepositModal modalDeposit={modalDeposit} setModalDeposit={setModalDeposit}/>
      <PaymentModal modalActive={modalActive} setModalActive={setModalActive} />
    </>
  )
}

export default UserCard