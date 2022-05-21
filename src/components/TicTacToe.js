import Board from "./Board"
import Title from "./Title"
import TicTacToeContext from "../context/TicTacToeContext"
import React, { useReducer, useEffect } from "react"
import reducer from "../reducers/reducer"

const initial_moves = [0, 0, 0, 0, 0, 0, 0, 0, 0]

const TicTacToe = () => {

    const [players, dispatch] = useReducer(reducer, { player1: initial_moves, player2: initial_moves, disabled: false});

    const checkWinner = (array) => {
      if ((array[0] == 1 && array[1] == 1 && array[2] == 1) ||
          (array[3] == 1 && array[4] == 1 && array[5] == 1) ||
          (array[6] == 1 && array[7] == 1 && array[8] == 1) ||
          (array[0] == 1 && array[3] == 1 && array[6] == 1) ||
          (array[1] == 1 && array[4] == 1 && array[7] == 1) ||
          (array[2] == 1 && array[5] == 1 && array[8] == 1) ||
          (array[0] == 1 && array[4] == 1 && array[8] == 1) ||
          (array[2] == 1 && array[4] == 1 && array[6] == 1)) {
            return true
          }
    }

    return (
        <TicTacToeContext.Provider value={{players, dispatch}}>
            <Title />
            <Board />
            <h1>{checkWinner(players.player1) ? 'player1 won!' : ''}</h1>
            <h1>{checkWinner(players.player2) ? 'player2 won!' : ''}</h1>
        </TicTacToeContext.Provider>
    )
}

export default TicTacToe
