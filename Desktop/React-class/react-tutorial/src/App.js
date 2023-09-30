import React from 'react'
import Board from './TicTacToe/Board';

class App extends React.Component {
    render() {
      return (
        <div className="App bg-slate-700 h-screen">
          
         <Board/>
        </div>
      )
    }
  }

  export default App;