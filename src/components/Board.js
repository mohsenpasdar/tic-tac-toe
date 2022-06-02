import { useContext } from "react"
import TicTacToeContext from "../context/TicTacToeContext"
import Box from "./Box"

const Board = () => {
    const { state, dispatch } = useContext(TicTacToeContext)
    const boxes = ['foo', 'foo', 'foo', 'foo', 'foo', 'foo', 'foo', 'foo', 'foo']
    const fillBox = (e) => {
        if (state.turn) {
            if (e.target.innerHTML) {
                alert('choose another box')
            } else {
                e.target.innerHTML = 'X'
                    dispatch({
                    type: 'PLAYER_1',
                    value: e.target.value
                })
            }
        } else {
            if (e.target.innerHTML) {
                alert('choose another box')
            } else {
                e.target.innerHTML = 'O'
                dispatch({
                    type: 'PLAYER_2',
                    value: e.target.value
                })
            }
        }
    }
    
    const onClick = (e) => {
        fillBox(e)
        dispatch({type: 'CHECK_WINNER'})
        dispatch({type: 'CHECK_DRAW'})
        dispatch({type: 'CHECK_END'})
    }

    return (
        <div className="boxes-container">
            {boxes.map((box, idx) => (
                <Box key={idx} value={idx} onClick={onClick} disabled={state.disable} />
            ))}
        </div>
    )
}

export default Board