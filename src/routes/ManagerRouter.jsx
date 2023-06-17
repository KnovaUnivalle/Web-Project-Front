import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HomeManager from '../pages/manager/HomeManager';
import Loading from '../pages/Loading';
const NotMatch = lazy(() => import('../pages/NotMatch'));

const ManagerRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path={'/'} element={<HomeManager />} />
			</Routes>
		</Suspense>
	);
};

export default ManagerRouter;
