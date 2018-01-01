const defalutState = {
    action: 'add',
    title: '',
    description: '',
    id: '',
};

const todoform = (state = defalutState, action) => {
    const { type, payload } = action;

    switch (type) {
    case 'TODO_EDIT_START':
        return {
            ...state,
            action: 'edit',
            id: payload.id,
            title: payload.title,
            description: payload.description,
        };
    case 'TODO_EDIT_END':
        return defalutState;
    default:
        return state;
    }
};

export default todoform;
