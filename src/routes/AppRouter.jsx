import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { HOME_AS_PATH, LANDING_PAGE_AS_PATH, SIGN_AS_PATH } from '../utils/PATH';
const LandingPage = lazy(() => import('../pages/LandingPage'));
const Home = lazy(() => import('../pages/Home'));
const SignRouter = lazy(() => import('./SignRouter'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<div>Cargando</div>}>
			<Routes>
				<Route path={LANDING_PAGE_AS_PATH} element={<LandingPage />} />
				<Route path={HOME_AS_PATH} element={<Home />} />
				<Route path={SIGN_AS_PATH} element={<SignRouter />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
