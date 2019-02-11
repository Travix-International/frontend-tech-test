export const BASE_URL = 'http://localhost:9001';
export const API_URLS = {
    TASKLIST: '/tasks',
    TASK: (id) => `/task/${id}`,
    UPDATETASK: (id, title, description) => `/task/update/${id}/${title}/${description}`,
    CREATETASK: (title, description) => `/task/create/${title}/${description}`,
    DELETETASK: (id) => `/task/delete/${id}`
}
export const API_TYPE = {
    GET:'GET',
    POST:'POST',
    PUT:'PUT',
    DELETE:'DELETE'
}