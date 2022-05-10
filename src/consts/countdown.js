import { makeAutoObservable } from "mobx";

class Countdown {
    mins = 0
    secs = 0

    constructor() {
        makeAutoObservable(this)
    }

    setMins(min) {
        this.mins += min
    }

    setSecs(sec) {
        this.secs += sec
    }
}

export default new Countdown()