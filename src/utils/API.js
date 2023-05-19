import axios from 'axios';

const host = import.meta.env.VITE_HOST;

const API = axios.create();
API.defaults.baseURL = host;
API.defaults.headers.post['Content-Type'] = 'application/json';
API.defaults.headers.put['Content-Type'] = 'application/json';

export default API;
