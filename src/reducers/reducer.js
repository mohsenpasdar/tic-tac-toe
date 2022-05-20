const reducer = (state, action) => {
    switch (action.type) {
        case 'PLAYER_1':
            return {
                ...state, player1: action.value
            }
        default: 
            return state
    }
}

export default reducer