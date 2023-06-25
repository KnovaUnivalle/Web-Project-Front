export const HOST_ENV = import.meta.env.VITE_HOST ?? 'http://127.0.0.1:8000/api/';
export const MODE_ENV = import.meta.env.VITE_PRODUCTION_MODE === 'true'; // true:  production, false: VITE_DEV_MODE
export const SITE_KEY_ENV = import.meta.env.VITE_REACT_APP_SITE_KEY;
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
