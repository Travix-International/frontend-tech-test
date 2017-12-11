export const TODO_ADD = 'TODO_ADD'
export const TODO_ADD_SUCCEDED = 'TODO_ADD_SUCCEDED'
export const TODO_ADD_ERRORED = 'TODO_ADD_ERRORED'

export function TODOAdd(TODO) {
    return {
        type: TODO_ADD,
        TODO
    }
}