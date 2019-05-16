import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = () => {
    this.props.store.checkItem(this.props.item.name)
  }
  editItem = () => {
    const promptLocation = prompt("enter location", this.props.item.name)
    if (promptLocation != null) {
      this.props.store.editItem(this.props.item.name, promptLocation)
    }
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item)
  }
  render() {

    return (
      <div className={this.props.item.completed ? "crossed" : null}>
        <input type="checkbox" value={this.props.item.name} onChange={this.checkItem}></input>
        <label>{this.props.item.name} {this.props.item.location}</label>
        <button onClick={this.editItem}>Edit</button>
        <button onClick={this.deleteItem}>Delete</button>
      </div>)
  }
}

export default Item