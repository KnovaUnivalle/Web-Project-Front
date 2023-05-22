import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
const LandingPage = lazy(() => import('../pages/LandingPage'));
const Home = lazy(() => import('../pages/Home'));
const SignRouter = lazy(() => import('./SignRouter'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<div>Cargando</div>}>
			<Routes>
				<Route path='/*' element={<LandingPage />} />
				<Route path='/home' element={<Home />} />
				<Route path='sign/*' element={<SignRouter />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
