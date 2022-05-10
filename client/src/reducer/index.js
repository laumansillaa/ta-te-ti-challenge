const initialState = {
    users: [],
    user: [],
    game: [],
    games: [],
    filter: [],
    error: null
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER_SUCCESS':
            return {
                ...state,
                user: action.payload
            }
        case 'ADD_USER_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'GET_ALL_USER_SUCCESS':
            return {
                ...state,
                users: action.payload
            }
        case 'GET_ALL_USER_ERROR':
            return {
                ...state,
                error: action.payload
            }
        

        case 'ADD_GAME_SUCCESS':
            return {
                ...state,
                game: action.payload
            }
        
        case 'ADD_GAME_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'ALL_GAMES_SUCCESS':
            return {
                ...state,
                games: action.payload
        }

        case 'ALL_GAMES_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'FILTER_BY_USER_SUCCESS':
            const data = action.payload
            const user = state.users
            const filter = user.filter(e => e.username === data.payload)[0].Games.map(e => e)
            return {
                ...state,
                games: filter
            }
        case 'FILTER_BY_USER_ERROR':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
        


    }
}

export default rootReducer;