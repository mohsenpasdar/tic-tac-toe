import Board from "./Board"
import Title from "./Title"
import TicTacToeContext from "../context/TicTacToeContext"
import React, { useReducer, useEffect } from "react"
import reducer from "../reducers/reducer"

const initial_moves = [0, 0, 0, 0, 0, 0, 0, 0, 0]

const TicTacToe = () => {

    const [players, dispatch] = useReducer(reducer, { player1: initial_moves, player2: initial_moves, resetMoves: false, resetGame: false});

    const resetGame = () => {
      players.resetGame = false
      players.resetMoves = false
    }
    console.log(players.resetMoves);
    const checkWinner = (array) => {
      if ((array[0] == 1 && array[1] == 1 && array[2] == 1) ||
          (array[3] == 1 && array[4] == 1 && array[5] == 1) ||
          (array[6] == 1 && array[7] == 1 && array[8] == 1) ||
          (array[0] == 1 && array[3] == 1 && array[6] == 1) ||
          (array[1] == 1 && array[4] == 1 && array[7] == 1) ||
          (array[2] == 1 && array[5] == 1 && array[8] == 1) ||
          (array[0] == 1 && array[4] == 1 && array[8] == 1) ||
          (array[2] == 1 && array[4] == 1 && array[6] == 1)) {
            players.resetMoves = true
            players.resetGame = true
            players.player1 = initial_moves
            players.player2 = initial_moves
            return true
          }
    }

    return (
        <TicTacToeContext.Provider value={{players, dispatch}}>
            <Title />
            <Board />
            <h1>{checkWinner(players.player1) ? 'player1 won!' : ''}</h1>
            <h1>{checkWinner(players.player2) ? 'player2 won!' : ''}</h1>
            <p>{players.player1}</p>
            <p>{players.player2}</p>
            <p>{players.resetMoves ? 'resetmoves is true' : 'resetmoves is false'}</p>
            <p>{players.resetGame ? 'resetGame is true' : 'resetGame is false'}</p>
            {players.resetGame ? <button onClick={resetGame}>reset game</button> : 'resetgame offff'}

        </TicTacToeContext.Provider>
    )
}

export default TicTacToe
