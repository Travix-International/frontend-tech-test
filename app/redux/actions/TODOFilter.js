export const TODO_FILTER = 'TODO_FILTER'

export function TODOFilter(tag) {
    return {
        type: TODO_FILTER,
        tag
    }
}