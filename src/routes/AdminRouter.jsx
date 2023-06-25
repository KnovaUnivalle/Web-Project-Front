import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HomeAdmin from '../pages/admin/HomeAdmin';
import Loading from '../pages/Loading';
import UserAdmin from '../pages/admin/UserAdmin';
import { EDIT_USER_ADMIN__AS_PATH, USERS_ADMIN_AS_PATH } from '../utils/PATH';
const NotMatch = lazy(() => import('../pages/NotMatch'));

const AdminRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path={'/'} element={<HomeAdmin />} />
				<Route path={USERS_ADMIN_AS_PATH} element={<UserAdmin />} />
				<Route path={`${USERS_ADMIN_AS_PATH}/:id`} element={<UserAdmin />} />
				<Route path={`${EDIT_USER_ADMIN__AS_PATH}/:id`} element={<UserAdmin />} />
			</Routes>
		</Suspense>
	);
};

export default AdminRouter;
