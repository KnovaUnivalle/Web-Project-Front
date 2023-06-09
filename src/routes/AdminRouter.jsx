import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HomeAdmin from '../pages/admin/HomeAdmin';
const NotMatch = lazy(() => import('../pages/NotMatch'));

const AdminRouter = () => {
	return (
		<Suspense fallback={<div>Cargando</div>}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path={'/'} element={<HomeAdmin />} />
			</Routes>
		</Suspense>
	);
};

export default AdminRouter;
