import axios from 'axios';

const host = import.meta.env.VITE_HOST || 'http://127.0.0.1:8000/api/';

const API = axios.create();
API.defaults.baseURL = host;
API.defaults.headers.post['Content-Type'] = 'application/json';
API.defaults.headers.put['Content-Type'] = 'application/json';

export default API;
