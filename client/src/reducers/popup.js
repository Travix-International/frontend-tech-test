const popup = (state = { current: null }, action) => {
    const { type, payload } = action;

    switch (type) {
    case 'POPUP_SHOW':
        return {
            ...state,
            current: payload.id,
            message: payload.message,
        };
    case 'POPUP_HIDE':
        return { ...state, current: null, message: null };
    default:
        return state;
    }
};

export default popup;
