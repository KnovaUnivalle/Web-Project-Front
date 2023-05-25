import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SIGN_IN_AS_PATH, SIGN_UP_CUSTOMER_AS_PATH } from '../utils/PATH';
const NotMatch = lazy(() => import('../pages/NotMatch'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignCustomer = lazy(() => import('../pages/signup/SignCustomer'));

const SignRouter = () => {
	return (
		<Suspense fallback={<div>Cargando</div>}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path={SIGN_UP_CUSTOMER_AS_PATH} element={<SignCustomer />} />
				<Route path={SIGN_IN_AS_PATH} element={<SignIn />} />
			</Routes>
		</Suspense>
	);
};

export default SignRouter;
