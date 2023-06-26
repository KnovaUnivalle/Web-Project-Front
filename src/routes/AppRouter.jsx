import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	HOME_AS_PATH,
	LANDING_PAGE_AS_PATH,
	SIGN_AS_PATH,
	ADMIN_HOME_AS_PATH,
	MANAGER_HOME_AS_PATH,
} from '../utils/PATH';
import Loading from '../pages/Loading';
const Customer = lazy(() => import('../pages/customer/Customer'));
const Manager = lazy(() => import('../pages/manager/Manager'));
const Admin = lazy(() => import('../pages/admin/Admin'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const SignRouter = lazy(() => import('./SignRouter'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<Loading />}>
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
