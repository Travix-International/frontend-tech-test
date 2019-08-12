import {
    HORIZONTAL_MENU_POSITION,
    SWITCH_LANGUAGE,
    TOGGLE_COLLAPSED_NAV,
    WINDOW_WIDTH
} from 'constants/ActionTypes';

export function toggleCollapsedNav(isNavCollapsed) {
    return {type: TOGGLE_COLLAPSED_NAV, isNavCollapsed};
}


export function updateWindowWidth(width) {
    return {type: WINDOW_WIDTH, width};
}


export function setHorizontalMenuPosition(navigationPosition) {
    return {
        type: HORIZONTAL_MENU_POSITION,
        payload: navigationPosition
    };
}

export function switchLanguage(locale) {
    return {
        type: SWITCH_LANGUAGE,
        payload: locale
    };
}
