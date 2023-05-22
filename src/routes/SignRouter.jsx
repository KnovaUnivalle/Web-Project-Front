import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const NotMatch = lazy(() => import('../pages/NotMatch'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignCustomer = lazy(() => import('../pages/signup/SignCustomer'));

const SignRouter = () => {
	return (
		<Suspense fallback={<div>Cargando</div>}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path='/up/customer' element={<SignCustomer />} />
				<Route path='/in' element={<SignIn />} />
			</Routes>
		</Suspense>
	);
};

export default SignRouter;
