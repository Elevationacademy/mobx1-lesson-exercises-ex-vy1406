import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = () => {
    this.props.store.checkItem(this.props.item.name)
  }
  editItem = () => {
    console.log("edit")
  }
  deleteItem = () => {
    console.log("delete")
  }
  render() {

    return (
      <div className= {this.props.item.completed ? "crossed" : null}>
        <input type="checkbox" value={this.props.item.name} onChange={this.checkItem}></input>
        <label>{this.props.item.name}</label>
        <button onClick={this.editItem}>Edit</button>
        <button onClick={this.deleteItem}>Delete</button>
      </div>)
  }
}

export default Item