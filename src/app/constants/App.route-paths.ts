/*
    Frontend routes
 */
export const routePaths = {
    home: '/',
    todo: {
        list: '/todos',
        new: '/todos/new',
        edit: '/todos/:id',
        editId: (id: number) => `/todos/${id}`,
    },
};