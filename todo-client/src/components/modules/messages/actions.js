export const SHOW_SUCCESS_MESSAGE = 'SHOW_SUCCESS_MESSAGE';
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const showSuccessMessage = message => ({ type: SHOW_SUCCESS_MESSAGE, message });
export const showErrorMessage = message => ({ type: SHOW_ERROR_MESSAGE, message });
export const clearMessages = () => ({ type: CLEAR_MESSAGES });
