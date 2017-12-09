export const TODO_DONE = 'TODO_DONE'
export const TODO_DONE_SUCCEDED = 'TODO_DONE_SUCCEDED'
export const TODO_DONE_ERRORED = 'TODO_DONE_ERRORED'

export function TODODone (TODO) {
    return {
        type: TODO_DONE,
        TODO
    }
}