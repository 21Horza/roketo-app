import React, {useState} from 'react'
import logo from '../assets/roketo.png'
import Modal from './Modal'
import Big from 'big.js';
import './depositModal.css'
import { observer } from 'mobx-react-lite';

const DepositModal = observer(({modalDeposit, setModalDeposit}) => {
    const [amount, setAmount] = useState(0)
    
    const amountHandler = (e) => {
      setAmount(Number(e.target.value));
    }
    
    const depositHandler = async () => {
      try {
          await window.contract.near_deposit({}, 200000000000000, Big(amount || '0').times(10 ** 24).toFixed());
        } catch (e) {
          alert(
            'Seems like your connection is slow' +
            'Check your connection or authorization'
          )
          throw e
        }
      } 

  return (
    <Modal active={modalDeposit} setActive={setModalDeposit}>
        <form className='stream__form' onSubmit={async e => {
          e.preventDefault()
        }}>
            <div className='title'>
            <img className='logo' src={logo}/>
            </div>
            <input 
                value={amount}
                id='amount' 
                placeholder='amount:'
                type='number'
                onChange={e => amountHandler(e)}
            />
            <button onClick={depositHandler} style={{marginTop: '2rem'}}>deposit</button>
        </form>
    </Modal>
  )
})

export default DepositModal