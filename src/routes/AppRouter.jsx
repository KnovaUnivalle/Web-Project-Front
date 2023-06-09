import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {
	HOME_AS_PATH,
	LANDING_PAGE_AS_PATH,
	SIGN_AS_PATH,
	ADMIN_HOME_AS_PATH,
	MANAGER_HOME_AS_PATH,
} from '../utils/PATH';
const Customer = lazy(() => import('../pages/Customer'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const Manager = lazy(() => import('../pages/Manager'));
const Admin = lazy(() => import('../pages/Admin'));
const SignRouter = lazy(() => import('./SignRouter'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<div>Cargando</div>}>
			<Routes>
				<Route path={LANDING_PAGE_AS_PATH} element={<LandingPage />} />
				<Route path={SIGN_AS_PATH} element={<SignRouter />} />
				<Route path={HOME_AS_PATH} element={<Customer />} />
				<Route path={MANAGER_HOME_AS_PATH} element={<Manager />} />
				<Route path={ADMIN_HOME_AS_PATH} element={<Admin />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
