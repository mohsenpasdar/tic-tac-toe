import React, { useState } from 'react'

const AllInOne = () => {
  const initial_moves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  const [player1, setPlayer1] = useState(initial_moves)
  const [player2, setPlayer2] = useState(initial_moves)
  const [state, setState] = useState(true)
  const [filledBoxes, setFilledBoxes] = useState(0)
  const [disable, setDisable] = useState(false)

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

  const resetGame = () => {
    document.querySelectorAll('.button').forEach((element) => element.innerText = ``)
    setFilledBoxes(0)
    setPlayer1(initial_moves)
    setPlayer2(initial_moves)
  }

  const fillBox = (e) => {
      if (state) {
          if (e.target.innerHTML) {
              alert('choose another box')
          } else {
              e.target.innerHTML = 'X'
              setState(!state)
              setFilledBoxes(filledBoxes + 1)
              setPlayer1(player1.map((box, idx) => {
                if (idx == e.target.value) {
                  return 1
                } else {
                  return box
                }
              }))
          }
      } else {
          if (e.target.innerHTML) {
              alert('choose another box')
          } else {
              e.target.innerHTML = 'O'
              setState(!state)
              setFilledBoxes(filledBoxes + 1)
              setPlayer2(player2.map((box, idx) => {
                if (idx == e.target.value) {
                  return 1
                } else {
                  return box
                }
              }))
          }
      }
  }

  return (
    <div>
      <div className="boxes-container">
          <div className="box-item">
              <button value='0' onClick={fillBox} className="button" disabled={disable}>
              </button>
          </div>

          <div className="box-item">
              <button value='1' onClick={fillBox} className="button" >
              </button>
          </div>

          <div className="box-item">
              <button value='2' onClick={fillBox} className="button" >
              </button>
          </div>

          <div className="box-item">
              <button value='3' onClick={fillBox} className="button" >
              </button>
          </div>

          <div className="box-item">
              <button value='4' onClick={fillBox} className="button" >
              </button>
          </div>

          <div className="box-item">
              <button value='5' onClick={fillBox} className="button" >
              </button>
          </div>

          <div className="box-item">
              <button value='6' onClick={fillBox} className="button" >
              </button>
          </div>

          <div className="box-item">
              <button value='7' onClick={fillBox} className="button" >
              </button>
          </div>

          <div className="box-item">
              <button value='8' onClick={fillBox} className="button" >
              </button>
          </div>
      </div>
      <button className='reset' onClick={resetGame}>Reset</button>
      <div>{filledBoxes === 9 ? "Draw" : ''}</div>
      <div>{checkWinner(player1) ? 'player1 won' : ''}</div>
      <div>{checkWinner(player2) ? 'player2 won' : ''}</div>
    </div>
  )
}

export default AllInOne
