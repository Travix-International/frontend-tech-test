export const TODO_UPDATE = 'TODO_UPDATE'
export const TODO_UPDATE_SUCCEDED = 'TODO_UPDATE_SUCCEDED'
export const TODO_UPDATE_ERRORED = 'TODO_UPDATE_ERRORED'

export function TODOUpdate(TODO) {
    return {
        type: TODO_UPDATE,
        TODO
    }
}