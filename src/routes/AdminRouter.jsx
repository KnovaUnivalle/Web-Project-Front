import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from '../pages/Loading';
import {
	ADD_USER_ADMIN_AS_PATH,
	EDIT_USER_ADMIN__AS_PATH,
	USERS_ADMIN_AS_PATH,
} from '../utils/PATH';
const NotMatch = lazy(() => import('../pages/NotMatch'));
const HomeAdmin = lazy(() => import('../pages/admin/HomeAdmin'));
const UserAdmin = lazy(() => import('../pages/admin/users/UserAdmin'));
const UserDetails = lazy(() => import('../pages/admin/users/UserDetails'));
const UserNew = lazy(() => import('../pages/admin/users/UserNew'));
const UserEdit = lazy(() => import('../pages/admin/users/UserEdit'));

const AdminRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path={'/'} element={<HomeAdmin />} />
				<Route path={USERS_ADMIN_AS_PATH} element={<UserAdmin />} />
				<Route path={`${USERS_ADMIN_AS_PATH}/:id`} element={<UserDetails />} />
				<Route path={`${EDIT_USER_ADMIN__AS_PATH}/:id`} element={<UserEdit />} />
				<Route path={ADD_USER_ADMIN_AS_PATH} element={<UserNew />} />
			</Routes>
		</Suspense>
	);
};

export default AdminRouter;
