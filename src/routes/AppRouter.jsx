import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
const LandingPage = lazy(() => import('../pages/LandingPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
import Home from '../pages/Home';

const AppRoutes = () => {
	return (
		<>
			<Suspense fallback={<div>Cargando</div>}>
				<Routes>
					<Route path='*' element={<NotFound />} />
					<Route path='home/*' element={<LandingPage />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default AppRoutes;
