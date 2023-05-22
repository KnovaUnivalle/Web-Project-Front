import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SignCustomer from '../pages/signup/SignCustomer';

const NotFound = lazy(() => import('../pages/NotFound'));

const SignRouter = () => {
	return (
		<>
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<SignCustomer />} />
			</Routes>
		</>
	);
};

export default SignRouter;
