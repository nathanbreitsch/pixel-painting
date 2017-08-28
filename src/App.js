import React, { Component } from 'react';
import './App.css';
import DrawingCanvas from './DrawingCanvas'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: this.makeBoard()
    }
  }

  makeBoard = () => {
    return Array(20)
      .fill('')
      .map(x => Array(20).fill(''))
  }

  handleCellClick = (x,y) => {
    let tmpBoard = JSON.parse(JSON.stringify(this.state.board))
    tmpBoard[x][y] = 'red'
    this.setState({board: tmpBoard})
  }

  render() {
    return <div>
      <DrawingCanvas
        board={ this.state.board }
        handleCellClick={ this.handleCellClick } /> 
    </div>
  }
}

export default App;
