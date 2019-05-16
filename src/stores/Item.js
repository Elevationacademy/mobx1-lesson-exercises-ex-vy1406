import { observable } from 'mobx'

export class Item {
    @observable name
    @observable completed = false
    @observable location = "super shell"
    
    constructor(name) {
        this.name = name
    }
}