const initState = {
    users: [
        {id: 1, name: "Zoe"},
        {id: 2, name: "John"},
        {id: 3, name: "Ann"}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;