const initState = {
    users: [
        {id: 1, name: "Zoe"},
        {id: 2, name: "John"}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;