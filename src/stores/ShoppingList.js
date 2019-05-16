import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (argName) => {
        let item = this.list.find(i => i.name === argName)
        item.completed = !item.completed
    }
    @action addItem = (argItem) => {
        const itemToPush = new Item(argItem)
        this.list.push(itemToPush)
    }
    @action editItem = (argName, location) => {
        let item = this.list.find(i => i.name === argName)
        item.location = location
    }
    @action deleteItem = (argItem) => {
        const list = this.list.filter(item => item !== argItem)
        this.list = list
    }
}

