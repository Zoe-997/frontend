const initState = {
    users: [
        {id: 1, name: "Zoe"},
        {id: 2, name: "John"},
        {id: 3, name: "Ann"}
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETED_USER':
            console.log('>>> run into delete user: ', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state, users
            }
        
        case 'CREATED_USER':
            console.log('>>> run into add user: ', action);
            let id = Math.floor(Math.random() * 10000);
            let user = { id: id, name: `random - ${id}`};
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}

export default rootReducer;