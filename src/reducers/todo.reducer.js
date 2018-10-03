const initialState = {
    error: false,
    loading: false,
    tasks: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "too_fetch_start":
            return Object.assign({}, state, { loading: true });
        case "todo_fetch_fail":
            return Object.assign({}, state, { loading: false, error: true });
        case "todo_fetch_success":
            return Object.assign({}, state, { loading: false, error: false, todo: action.payload });
        default:
            return Object.assign({},state);
    }
}