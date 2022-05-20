import { useContext, useState } from "react"
import TicTacToeContext from "../context/TicTacToeContext"

const Board = () => {
    const [state, setState] = useState(true)
    const [filledBoxes, countFilledBoxes] = useState(0)
    const { dispatch, players } = useContext(TicTacToeContext)
    
    const fillBox = (e) => {
        console.log(players.player1);
        const selectedBox = e.target.value
        console.log(typeof(selectedBox));
        if (state) {
            if (e.target.innerHTML) {
                alert('choose another box')
            } else {
                e.target.innerHTML = 'X'
                setState(!state)
                countFilledBoxes(filledBoxes + 1)
                players.player1[selectedBox[0]][selectedBox[1]] = 1
                dispatch({
                    type: "PLAYER_1",
                    value: players.player1
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
                <button value='00' onClick={fillBox}></button>
            </div>

            <div className="box-item">
                <button value='01' onClick={fillBox}></button>
            </div>
            
            <div className="box-item">
                <button value='02' onClick={fillBox}></button>
            </div>

            <div className="box-item">
                <button value='10' onClick={fillBox}></button>
            </div>

            <div className="box-item">
                <button value='11' onClick={fillBox}></button>
            </div>

            <div className="box-item">
                <button value='12' onClick={fillBox}></button>
            </div>

            <div className="box-item">
                <button value='20' onClick={fillBox}></button>
            </div>

            <div className="box-item">
                <button value='21' onClick={fillBox}></button>
            </div>

            <div className="box-item">
                <button value='22' onClick={fillBox}></button>
            </div>
        </div>
    )
}

export default Board