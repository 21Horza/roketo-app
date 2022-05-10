import React, {useEffect, useState} from 'react'
import './info.css'
import Countdown from './Countdown';
import { utils } from "near-api-js";

const Info = () => {
    const [balance, setBalance] = useState()

    useEffect(async () => {
        await window.contract.ft_balance_of({
            account_id: window.accountId
          }).then((balance) => {
            setBalance(Number(utils.format.formatNearAmount(balance)).toLocaleString())
          })
    }, [])


  return (
    <>
    <div className='info__bar'>
        <div className='deposit'>
            Balance
            <h2>{balance} NEAR<span>Ⓝ</span></h2>
        </div>
            <Countdown className='time' />
        <div className='info'>
            See more info
            <h2>
                <a style={{color: '#fff', fontSize: '20px'}} href="https://app.roke.to/#/streams">
                    🚀 Roke.to
                </a>
            </h2>
        </div>
    </div>
    </>
  )
}

export default Info