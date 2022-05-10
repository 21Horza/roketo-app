import { makeAutoObservable } from "mobx";

class Disabled {
    disabled = true

    constructor() {
        makeAutoObservable(this)
    }

    setDisabledFalse() {
        this.disabled = false
    }

    setDisabledTrue() {
        this.disabled = true
    }
}

export default new Disabled()