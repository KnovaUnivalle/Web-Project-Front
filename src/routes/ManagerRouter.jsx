import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HomeManager from '../pages/manager/HomeManager';
const NotMatch = lazy(() => import('../pages/NotMatch'));

const ManagerRouter = () => {
	return (
		<Suspense fallback={<div>Cargando</div>}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path={'/'} element={<HomeManager />} />
			</Routes>
		</Suspense>
	);
};

export default ManagerRouter;
