import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SIGN_IN_AS_PATH, SIGN_OUT_AS_PATH, SIGN_UP_CUSTOMER_AS_PATH } from '../utils/PATH';
import Loading from '../pages/Loading';
const NotMatch = lazy(() => import('../pages/NotMatch'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignCustomer = lazy(() => import('../pages/customer/SignCustomer'));
const SignOut = lazy(() => import('../pages/SignOut'));

const SignRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path={SIGN_UP_CUSTOMER_AS_PATH} element={<SignCustomer />} />
				<Route path={SIGN_IN_AS_PATH} element={<SignIn />} />
				<Route path={SIGN_OUT_AS_PATH} element={<SignOut />} />
			</Routes>
		</Suspense>
	);
};

export default SignRouter;
