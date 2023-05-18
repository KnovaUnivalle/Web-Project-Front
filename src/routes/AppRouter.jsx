import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
const LandingPage = lazy(() => import('../pages/LandingPage'));
const Home = lazy(() => import('../pages/Home'));

const AppRoutes = () => {
	return (
		<>
			<Suspense fallback={<div>Cargando</div>}>
				<Routes>
					<Route path='/*' element={<LandingPage />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default AppRoutes;
