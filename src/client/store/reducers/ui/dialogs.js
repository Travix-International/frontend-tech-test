import * as actions from '../../actions/index';

var defaultState = () => {
	return { 
		delete: { 
			isOpen: false, 
			todoId: null 
		},
		addTodo: {
			isOpen: false,
			title: '',
			description: ''
		},
		editTodo: {
			isOpen: false,
			todo: {}
		}
	};
}

const dialogs = (state = defaultState(), action) => {
		switch (action.type) {
			case actions.OPEN_DELETE_DIALOG:
				return Object.assign({}, state, {
					...state,
					delete: {
						isOpen: true,
						todoId: action.todoId
					}
				});
			case actions.CLOSE_DELETE_DIALOG:
				return Object.assign({}, state, {
					...state,
			    	delete: { 
						isOpen: false, 
						todoId: null 
					}
				});
			case actions.UPDATE_ADD_TODO_DIALOG_TITLE:
				return Object.assign({}, state, {
					...state,
					addTodo: {
						...state.addTodo,
						title: action.title
					}
				});
			case actions.UPDATE_ADD_TODO_DIALOG_DESCRIPTION:
				return Object.assign({}, state, {
					...state,
					addTodo: {
						...state.addTodo,
						description: action.description
					}
				});
			case actions.OPEN_ADD_TODO_DIALOG:
				return Object.assign({}, state, {
					...state,
			    	addTodo: { 
						isOpen: true, 
						title: '',
						description: ''
					}
				});
			case actions.CLOSE_ADD_TODO_DIALOG:
				return Object.assign({}, state, {
					...state,
			    	addTodo: { 
						isOpen: false, 
						title: '',
						description: ''
					}
				});
			case actions.UPDATE_EDIT_TODO_DIALOG_TITLE:
				return Object.assign({}, state, {
					...state,
					editTodo: {
						...state.editTodo,
						todo: {
							...state.editTodo.todo,
							title: action.title
						}
					}
				});
			case actions.UPDATE_EDIT_TODO_DIALOG_DESCRIPTION:
				return Object.assign({}, state, {
					...state,
					editTodo: {
						...state.editTodo,
						todo: {
							...state.editTodo.todo,
							description: action.description
						}
					}
				});
			case actions.OPEN_EDIT_TODO_DIALOG:
				return Object.assign({}, state, {
					...state,
			    	editTodo: { 
						isOpen: true, 
						todo: action.todo
					}
				});
			case actions.CLOSE_EDIT_TODO_DIALOG:
				return Object.assign({}, state, {
					...state,
			    	editTodo: { 
						isOpen: false, 
						todo: {}
					}
				});
			default:
				return state;
	}
};
module.exports = dialogs;