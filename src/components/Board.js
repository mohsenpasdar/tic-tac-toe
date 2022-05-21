import { useContext, useState } from "react"
import TicTacToeContext from "../context/TicTacToeContext"

const Board = () => {
    const [state, setState] = useState(true)
    const [filledBoxes, countFilledBoxes] = useState(0)
    const { dispatch, players } = useContext(TicTacToeContext)

    const fillBox = (e) => {
        if (state) {
            if (e.target.innerHTML) {
                alert('choose another box')
            } else {
                e.target.innerHTML = 'X'
                setState(!state)
                countFilledBoxes(filledBoxes + 1)
                dispatch({
                    type: "PLAYER_1",
                    value: e.target.value
                })
            }
        } else {
            if (e.target.innerHTML) {
                alert('choose another box')
            } else {
                e.target.innerHTML = 'O'
                setState(!state)
                countFilledBoxes(filledBoxes + 1)
                dispatch({
                    type: "PLAYER_2",
                    value: e.target.value
                })
            }
        }

    }

    return (
        <div className="boxes-container">
            <div className="box-item">
                <button value='0' onClick={fillBox} className="button" disabled={players.disabled}></button>
            </div>

            <div className="box-item">
                <button value='1' onClick={fillBox} className="button" disabled={players.disabled}></button>
            </div>

            <div className="box-item">
                <button value='2' onClick={fillBox} className="button" disabled={players.disabled}></button>
            </div>

            <div className="box-item">
                <button value='3' onClick={fillBox} className="button" disabled={players.disabled}></button>
            </div>

            <div className="box-item">
                <button value='4' onClick={fillBox} className="button" disabled={players.disabled}></button>
            </div>

            <div className="box-item">
                <button value='5' onClick={fillBox} className="button" disabled={players.disabled}></button>
            </div>

            <div className="box-item">
                <button value='6' onClick={fillBox} className="button" disabled={players.disabled}></button>
            </div>

            <div className="box-item">
                <button value='7' onClick={fillBox} className="button" disabled={players.disabled}></button>
            </div>

            <div className="box-item">
                <button value='8' onClick={fillBox} className="button" disabled={players.disabled}></button>
            </div>
        </div>
    )
}

export default Board
