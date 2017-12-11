export const TODO_SEARCH = 'TODO_SEARCH'

export function TODOSearch(search) {
    return {
        type: TODO_SEARCH,
        search
    }
}