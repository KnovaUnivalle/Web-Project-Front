import axios from 'axios';
import { HOST_ENV } from './ENV';

const API = axios.create();

API.defaults.baseURL = HOST_ENV;
API.defaults.headers.post['Content-Type'] = 'application/json';
API.defaults.headers.put['Content-Type'] = 'application/json';

export default API;
