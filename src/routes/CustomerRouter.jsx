import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import {} from '../utils/PATH';
import Loading from '../pages/Loading';
const HomeCustomer = lazy(() => import('../pages/customer/HomeCustomer'));
const NotMatch = lazy(() => import('../pages/NotMatch'));

const CustomerRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path={'/'} element={<HomeCustomer />} />
				<Route path='*' element={<NotMatch />} />
			</Routes>
		</Suspense>
	);
};

export default CustomerRouter;
