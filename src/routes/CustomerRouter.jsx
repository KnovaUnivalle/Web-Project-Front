import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SEARCH_CUSTOMER_AS_PATH } from '../utils/PATH';
import Loading from '../pages/Loading';
import ResultsCustomer from '../pages/customer/ResultsCustomer';
const HomeCustomer = lazy(() => import('../pages/customer/HomeCustomer'));
const NotMatch = lazy(() => import('../pages/NotMatch'));

const CustomerRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path='/' element={<HomeCustomer />} />
				<Route path={SEARCH_CUSTOMER_AS_PATH} element={<ResultsCustomer />} />
			</Routes>
		</Suspense>
	);
};

export default CustomerRouter;
