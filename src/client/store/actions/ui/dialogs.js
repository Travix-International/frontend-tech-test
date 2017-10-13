export const CLOSE_DELETE_DIALOG = 'CLOSE_DELETE_DIALOG';
export const CLOSE_ADD_TODO_DIALOG = 'CLOSE_ADD_TODO_DIALOG';
export const OPEN_ADD_TODO_DIALOG = 'OPEN_ADD_TODO_DIALOG';
export const CLOSE_EDIT_TODO_DIALOG = 'CLOSE_EDIT_TODO_DIALOG';
export const OPEN_EDIT_TODO_DIALOG = 'OPEN_EDIT_TODO_DIALOG';
export const OPEN_DELETE_DIALOG = 'OPEN_DELETE_DIALOG';
export const UPDATE_ADD_TODO_DIALOG_TITLE = 'UPDATE_ADD_TODO_DIALOG_TITLE';
export const UPDATE_ADD_TODO_DIALOG_DESCRIPTION = 'UPDATE_ADD_TODO_DIALOG_DESCRIPTION';
export const UPDATE_EDIT_TODO_DIALOG_TITLE = 'UPDATE_EDIT_TODO_DIALOG_TITLE';
export const UPDATE_EDIT_TODO_DIALOG_DESCRIPTION = 'UPDATE_EDIT_TODO_DIALOG_DESCRIPTION';
// export const SET_ADD_TODO_IS_LAODING = 'SET_ADD_TODO_IS_LAODING';

const updateAddTodoDialogTitle = (title) => {
	return {
		type: UPDATE_ADD_TODO_DIALOG_TITLE,
		title: title
	}
}
exports.updateAddTodoDialogTitle = updateAddTodoDialogTitle;

const updateAddTodoDialogDescription = (description) => {
	return {
		type: UPDATE_ADD_TODO_DIALOG_DESCRIPTION,
		description: description
	}
}
exports.updateAddTodoDialogDescription = updateAddTodoDialogDescription;

const updateEditTodoDialogTitle = (title) => {
	return {
		type: UPDATE_EDIT_TODO_DIALOG_TITLE,
		title: title
	}
}
exports.updateEditTodoDialogTitle = updateEditTodoDialogTitle;

const updateEditTodoDialogDescription = (description) => {
	return {
		type: UPDATE_EDIT_TODO_DIALOG_DESCRIPTION,
		description: description
	}
}
exports.updateEditTodoDialogDescription = updateEditTodoDialogDescription;

// const setAddTodoIsLoading = (isLoading) => {
// 	return {
// 		type: SET_ADD_TODO_IS_LAODING,
// 		isLoading: isLoading
// 	}
// }
// exports.setAddTodoIsLoading = setAddTodoIsLoading;

const openAddTodoDialog = () => {
	return {
		type: OPEN_ADD_TODO_DIALOG
	}
}
exports.openAddTodoDialog = openAddTodoDialog;

const closeAddTodoDialog = () => {
	return {
		type: CLOSE_ADD_TODO_DIALOG
	}
}
exports.closeAddTodoDialog = closeAddTodoDialog;

const openEditTodoDialog = (todo) => {
	return {
		type: OPEN_EDIT_TODO_DIALOG,
		todo: todo
	}
}
exports.openEditTodoDialog = openEditTodoDialog;

const closeEditTodoDialog = () => {
	return {
		type: CLOSE_EDIT_TODO_DIALOG
	}
}
exports.closeEditTodoDialog = closeEditTodoDialog;

const closeDeleteDialog = () => {
	return {
		type: CLOSE_DELETE_DIALOG
	}
}
exports.closeDeleteDialog = closeDeleteDialog;

const openDeleteDialog = (todoId) => {
	return {
		type: OPEN_DELETE_DIALOG,
		todoId: todoId
	}
}
exports.openDeleteDialog = openDeleteDialog;