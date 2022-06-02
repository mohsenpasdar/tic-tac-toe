import React, { useReducer } from 'react';
import Board from './Board';
import TicTacToeContext from '../context/TicTacToeContext';
import reducer from '../reducers/reducer'
import Result from './Result';
import Title from './Title';

const TicTacToe = () => {
    const initialState = {
        player1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        player2: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        winner1: false,
        winner2: false,
        disable: false,
        filledBoxes: 0,
        draw: false, 
        turn: true
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <Title />
            <TicTacToeContext.Provider value={{state, dispatch}}>
                <Board />
                <Result />
            </TicTacToeContext.Provider>
        </div>
    );
};

export default TicTacToe;
