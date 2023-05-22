import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
const NotFound = lazy(() => import('../pages/NotFound'));
const Team = lazy(() => import('../components/sections/Team'));
const Service = lazy(() => import('../components/sections/Service'));
const LandMain = lazy(() => import('../components/main/LandMain'));

const LandRouter = () => {
	return (
		<Suspense fallback={<div>Cargando</div>}>
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<LandMain />} />
				<Route path='/team' element={<Team />} />
				<Route path='/Service' element={<Service />} />
			</Routes>
		</Suspense>
	);
};

export default LandRouter;
