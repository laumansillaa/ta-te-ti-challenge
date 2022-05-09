//ACTIONS

export function addUser (payload) {
    return ({
        type: 'ADD_USER',
        payload
    })
};

// SAGAS SUCCESS AND ERROR

export function addUserError (error) {
    return ({
        type: 'ADD_USER_ERROR',
        payload: error
    })
}

export function addUserSuccess () {
    return {
        type: 'ADD_USER_SUCCESS',
    }
}


// GET USERS

export function getUsers() {
    return {
        type: 'GET_ALL_USER',
        
    }
}

export function getUsersError (error) {
    return ({
        type: 'GET_ALL_USER_ERROR',
        payload: error
    })
}

export function getUsersSuccess (users) {
    return {
        type: 'GET_ALL_USER_SUCCESS',
        payload: users
    }
}


//ADD GAME

export function addGame (payload) {
    return ({
        type: 'ADD_GAME',
        payload
    })

}


export function addGameError (error) {
    return ({
        type: 'ADD_GAME_ERROR',
        payload: error
    })
}

export function addGameSuccess (game) {
    return ({
        type: 'ADD_GAME_SUCCESS',
        payload: game
    })
}

//ADD GAMES TO USER

export function allGames () {
    return ({
        type: 'ALL_GAMES'
    })
}


export function allGamesSuccess (games) {
    return ({
        type: 'ALL_GAMES_SUCCESS',
        payload: games
    })
}

export function allGamesError (error) {
    return ({
        type: 'ALL_GAMES_ERROR',
        payload: error
    })
}


//FILTER BY USER 

export function filterByUser (payload) {
    return {
        type: 'FILTER_BY_USER',
        payload
    }
}

export function filterByUserSuccess (user) {
    return ({
        type: 'FILTER_BY_USER_SUCCESS',
        payload: user
    })
}

export function filterByUserError (error) {
    return {
        type: 'FILTER_BY_USER_ERROR',
        payload: error
    }
}