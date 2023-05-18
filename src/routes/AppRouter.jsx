import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SignRouter from './SignRouter';
const LandingPage = lazy(() => import('../pages/LandingPage'));
const Home = lazy(() => import('../pages/Home'));

const AppRoutes = () => {
	return (
		<>
			<Suspense fallback={<div>Cargando</div>}>
				<Routes>
					<Route path='/*' element={<LandingPage />} />
					<Route path='/home' element={<Home />} />
					<Route path='signup/*' element={<SignRouter />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default AppRoutes;
