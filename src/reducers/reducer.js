const reducer = (state, action) => {
  switch (action.type) {
    case 'PLAYER_1':
        return {
            ...state, player1: state.player1.map((box, index) => {
              if (index == action.value) {
                return 1
              } else {
                return box
              }
            })
        }
    case 'PLAYER_2':
        return {
            ...state, player2: state.player2.map((box, index) => {
              if (index == action.value) {
                return 1
              } else {
                return box
              }
            })
        }
    case 'DISABLE_BOXES': 
        return {
            player1: [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            player2: [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            boxesDisabled: false, 
            resetGame: true
        }

    default:
        return state
  }
}

export default reducer
