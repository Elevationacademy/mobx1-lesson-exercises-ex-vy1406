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
    editItem = () => {
        // your code here
    }
    deleteItem = () => {
        // your code here
    }
}

