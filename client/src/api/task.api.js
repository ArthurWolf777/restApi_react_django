import axios from 'axios'

const taskUrlApi = axios.create({
    baseURL : 'http://127.0.0.1:8000/tasks/api/v1/tasks/'
});

export const getAllTask = () => taskUrlApi.get('/');

export const getTask = (id) => taskUrlApi.get('/' + id + '/');

export const createTask = (task) => taskUrlApi.post('/', task);

export const deleteTask = (id) => taskUrlApi.delete('/' + id);

export const updateTask = (id, task) => taskUrlApi.put('/' + id + '/', task);