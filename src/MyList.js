import React, { Component } from 'react';
import ListItem from './ListItem'
import './MyList.css';

class MyList extends Component {
  constructor(props) {
    super()
    this.state = {
      toDoItemArray: [],
      currentItem: ''
    }
  }

  handleChange = (e) => { this.setState({ currentItem: e.target.value }) }

  addItem = (e) => {
    // Checking if currentItem has text
    if (this.state.currentItem) {
      // Create a copy
      let arrayCopy = Array.from(this.state.toDoItemArray)
      // Push item to the copy
      arrayCopy.push(this.state.currentItem)
      // Update the state with the copy
      this.setState({
        toDoItemArray: arrayCopy,
        currentItem: ''
     })
    }
  }

  deleteItem = (e, index) => {
    // Create a copy
    let arrayCopy = Array.from(this.state.toDoItemArray)
    // Find item by index key
    arrayCopy.splice(index, 1)
    // Update the state
    this.setState({
      toDoItemArray: arrayCopy
    })
  }

  clearList = (e) => { this.setState({ toDoItemArray: [] }) }

  render() {

    let jsxToDos = this.state.toDoItemArray.map((listItem, index) => {
      return (<ListItem
        key={index}
        doThis={listItem}
        deleteItem={ (e) => this.deleteItem(e, index)}
        />
      )
    })

    return (
      <div className="MyList">
        <h1>Things I should stop procrastinating:</h1>
        <ul>
            {jsxToDos}
        </ul>
        <input autoFocus type='text' value={this.state.currentItem} onChange={this.handleChange} />
        <button onClick={this.addItem}>Add Item</button>
        <br />
        <button onClick={this.clearList}>Clear List</button>
      </div>
    );
  }
}

export default MyList;
