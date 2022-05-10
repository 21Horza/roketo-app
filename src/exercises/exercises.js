import { makeAutoObservable } from "mobx"
import jogging from '../assets/jogging.png'
import pushups from '../assets/pushup.png'
import stretching from '../assets/stretching.png'

class Exercise {
    exercises = [
        {id: 1, name: 'Jogging', img: jogging, active: 'false', animation: 'false'},
        {id: 2, name: 'Push Ups', img: pushups, active: 'false', animation: 'false'},
        {id: 3, name: 'Stretching', img: stretching, active: 'false', animation: 'false'}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    start(exercise) {
        exercise.active = 'false'
        exercise.animation = 'false'
    }

    finish(exercise) {
        exercise.active = 'true'
        exercise.animation = 'true'
    }
}

export default new Exercise