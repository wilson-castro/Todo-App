import axios from 'axios';

const api = axios.create({ baseURL: 'http://192.168.0.114:3003/api/todos'});

export default api;