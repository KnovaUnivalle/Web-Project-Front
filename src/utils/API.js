import axios from 'axios';
import { HOST_ENV } from './ENV';

const API = axios.create();

API.defaults.baseURL = HOST_ENV;
API.defaults.headers.post['Content-Type'] = 'application/json';
API.defaults.headers.put['Content-Type'] = 'application/json';
API.interceptors.request.use(function (config) {
	try {
		const token = JSON.parse(localStorage.getItem('token_detective'));
		if (token && token !== 'null') {
			config.headers.Authorization = `Bearer ${token}`;
		}
	} catch {}
	return config;
});

export default API;
