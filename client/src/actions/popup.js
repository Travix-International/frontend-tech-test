export function showPopup(payload) {
    return {
        type: 'POPUP_SHOW',
        payload,
    };
}

export function hidePopup(payload) {
    return {
        type: 'POPUP_HIDE',
        payload,
    };
}
