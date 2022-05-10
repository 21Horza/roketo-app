import React, {useState, useEffect} from 'react'
import './gym.css'
import { observer } from 'mobx-react-lite'
import exercises from '../exercises/exercises'
import disabled from '../consts/disabled'

const Gym = observer(() => {
  const [notStart, setNotStart] = useState(true)
  
  useEffect(() => {
    setNotStart(JSON.parse(window.localStorage.getItem('disabled-exercises')))
  }, [])

  useEffect(() => {
      window.localStorage.setItem('disabled-exercises', disabled.disabled)
  }, [disabled.disabled])

  return (
    <>
      <div className='exercises'>
          {exercises.exercises.map(exercise => 
              <div key={exercise.id} className='exercise__card'>
                  <div className='title'>{exercise.name}</div>
                  <img src={exercise.img}/>
                    {exercise.animation === 'true' && exercise.id === 1 &&
                    <span className="loader"></span>
                    }
                    {exercise.animation === 'true' && exercise.id === 2 &&
                    <span className="loader__2"></span>
                    }
                    {exercise.animation === 'true' && exercise.id === 3 &&
                    <span className="loader__3"></span>
                    }
                  {exercise.active === 'true'
                  ? 
                  <button style={{backgroundColor: 'rgba(255, 0, 0, 0.549)'}} onClick={() => exercises.start(exercise)}>Finish</button>
                  :
                  <button disabled={notStart} onClick={() => exercises.finish(exercise)}>Start</button>
              }
              </div>
          )}
      </div>
    </>
  )
})

export default Gym