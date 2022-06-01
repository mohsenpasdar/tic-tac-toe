import React, { useState } from 'react'

const AllInOne = () => {
  const initial_moves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  const [turn, setTurn] = useState(true)
  const [state, setState] = useState({
    player1: initial_moves,
    player2: initial_moves,
    winner1: false,
    winner2: false,
    disable: false,
    filledBoxes: 0,
    draw: false
  })

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

  const fillBox = (e) => {
      if (turn) {
          if (e.target.innerHTML) {
              alert('choose another box')
          } else {
              e.target.innerHTML = 'X'
              setTurn(!turn)
              setState(state => ({
                ...state,
                filledBoxes: state.filledBoxes + 1,
                player1: state.player1.map((box, idx) => {
                  if (idx == e.target.value) {
                    return 1
                  } else {
                    return box
                  }
                })
              }))
          }
      } else {
          if (e.target.innerHTML) {
              alert('choose another box')
          } else {
              e.target.innerHTML = 'O'
              setTurn(!turn)
              setState(state => ({
                ...state,
                filledBoxes: state.filledBoxes + 1,
                player2: state.player2.map((box, idx) => {
                  if (idx == e.target.value) {
                    return 1
                  } else {
                    return box
                  }
                })
              }))
          }
      }
  }

  const onClick = (e) => {
    fillBox(e)
    setState(state => ({
      ...state,
      winner1: checkWinner(state.player1),
      winner2: checkWinner(state.player2)
    }))

    setState(state => ({
      ...state,
      draw: state.filledBoxes == 9 && !state.winner1 && !state.winner2
    }))

    setState(state => ({
      ...state,
      disable: state.winner1 || state.winner2
    }))
  }

  const resetGame = () => {
    document.querySelectorAll('.button').forEach((element) => element.innerText = ``)
    setState(state => ({
      ...state,
      player1: initial_moves,
      player2: initial_moves,
      winner1: false,
      winner2: false,
      disable: false,
      filledBoxes: 0,
      draw: false
    }))
    setTurn(true)
  }

  return (
    <div>
      <div className="boxes-container">
          <div className="box-item">
              <button value='0' onClick={onClick} className="button" disabled={state.draw ? true : state.disable}>
              </button>
          </div>

          <div className="box-item">
              <button value='1' onClick={onClick} className="button" disabled={state.draw ? true : state.disable}>
              </button>
          </div>

          <div className="box-item">
              <button value='2' onClick={onClick} className="button" disabled={state.draw ? true : state.disable}>
              </button>
          </div>

          <div className="box-item">
              <button value='3' onClick={onClick} className="button" disabled={state.draw ? true : state.disable}>
              </button>
          </div>

          <div className="box-item">
              <button value='4' onClick={onClick} className="button" disabled={state.draw ? true : state.disable}>
              </button>
          </div>

          <div className="box-item">
              <button value='5' onClick={onClick} className="button" disabled={state.draw ? true : state.disable}>
              </button>
          </div>

          <div className="box-item">
              <button value='6' onClick={onClick} className="button" disabled={state.draw ? true : state.disable}>
              </button>
          </div>

          <div className="box-item">
              <button value='7' onClick={onClick} className="button" disabled={state.draw ? true : state.disable}>
              </button>
          </div>

          <div className="box-item">
              <button value='8' onClick={onClick} className="button" disabled={state.draw ? true : state.disable}>
              </button>
          </div>
      </div>
      <button className='reset' onClick={resetGame}>Reset</button>
      <div>{state.draw ? "Draw" : ''}</div>
      <div>{state.winner1 ? 'player1 won' : ''}</div>
      <div>{state.winner2 ? 'player2 won' : ''}</div>
    </div>
  )
}

export default AllInOne
