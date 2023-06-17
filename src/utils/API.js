import axios from 'axios';
import { HOST_ENV } from './ENV';

const API = axios.create();

API.defaults.baseURL = HOST_ENV;
API.defaults.headers.post['Content-Type'] = 'application/json';
API.defaults.headers.put['Content-Type'] = 'application/json';
API.interceptors.request.use(function (config) {
	const token = localStorage.getItem('token_detective');
	if (token && token !== 'null') {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default API;
