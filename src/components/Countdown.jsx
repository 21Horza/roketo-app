import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react';
import countdown from '../consts/countdown';

const Countdown = observer(() => {
    const [minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);

    useEffect(() => {
        setMinutes(Number(window.localStorage.getItem('minutes')))
        setSeconds(Number(localStorage.getItem('seconds')))
      }, [])
    
    useEffect(() => {
        window.localStorage.setItem('minutes', countdown.mins)
        window.localStorage.setItem('seconds', countdown.secs)
    }, [countdown.mins], [countdown.secs])

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
        });
        
        return (
            <>
            { minutes === 0 && seconds === 0
                ? <h3>Please, create a stream to continue</h3>
                : <h1>{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
            }

            </>
    )
})

export default Countdown;