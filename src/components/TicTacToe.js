import Board from "./Board"
import Title from "./Title"
import TicTacToeContext from "../context/TicTacToeContext"
import { useReducer } from "react"
import reducer from "../reducers/reducer"

const initial_moves = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

const TicTacToe = () => {

    const [players, dispatch] = useReducer(reducer, { player1: initial_moves, player2: initial_moves})

    return (
        <TicTacToeContext.Provider value={{players, dispatch}}>
            <Title />
            <Board />
        </TicTacToeContext.Provider>
    )
}

export default TicTacToe