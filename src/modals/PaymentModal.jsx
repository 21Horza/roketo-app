import React, {useState} from 'react'
import Modal from './Modal'
import logo from '../assets/roketo.png'
import './paymentModal.css'
import { observer } from 'mobx-react-lite'
import disabled from '../consts/disabled'
import countdown from '../consts/countdown'

const PaymentModal = observer(({modalActive, setModalActive}) => {
    const [receiver, setReceiver] = useState('gymboss.testnet')
    const [amount, setAmount] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    let time = minutes + seconds

    const receiverHandler = (e) => {
        setReceiver(e.target.value);
    }

    const amountHandler = (e) => {
        setAmount(e.target.value);
    }

    const minsHandler = (e) => {
        setMinutes(Number(e.target.value));
    }
    
    const secsHandler = (e) => {
        setSeconds(Number(e.target.value));
    }
    
    const tokensPerSec = amount/time/60
    
    const paymentHandler = async () => {
        disabled.setDisabledFalse()
        countdown.setMins(minutes)
        countdown.setSecs(seconds)
        try {
            await window.contract.ft_transfer_call({
                receiver_id: 'streaming-r-v2.dcversus.testnet',
                amount: amount,
                memo: 'Roketo transfer',
                msg: JSON.stringify({
                    Create: {
                        request: {
                            "owner_id": window.accountId,
                            "receiver_id": receiver,
                            "tokens_per_sec": tokensPerSec, 
                        }
                    }
                }),
            }, 200000000000000, 1);
            
        } catch (e) {
            alert(
                'Something went wrong' +
                'Check your connection or authorization'
              )
            throw(e)
        }
    }
    

  return (
    <Modal active={modalActive} setActive={setModalActive}>
        <form className='payment__form' onSubmit={async e => {
        e.preventDefault()

        }}>
            <div className='title'>
                <img className='logo' src={logo}/>
            </div>
            <input className='input'
                value={receiver}
                id='receiver_id' 
                placeholder='receiver_id:'
                type='text'
                onChange={e => receiverHandler(e)} 
            />
            <input className='input'
                value={amount}
                id='amount' 
                type='number'
                placeholder='amount:'
                onChange={e => amountHandler(e)}
            />
            <input className='input'
                value={minutes}
                id='time' 
                type='number'
                placeholder='set time (mins):'
                onChange={e => minsHandler(e)}
            />
            <input className='input'
                value={seconds}
                id='time' 
                type='number'
                placeholder='set time (secs):'
                onChange={e => secsHandler(e)}
            />
            <button style={{marginTop: '2rem'}} onClick={() => paymentHandler()}>pay</button>
        </form>
    </Modal>
  )
})

export default PaymentModal