import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SignUpUser from '../components/forms/SignUpUser';

const NotFound = lazy(() => import('../pages/NotFound'));

const SignRouter = () => {
	return (
		<>
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<SignUpUser />} />
			</Routes>
		</>
	);
};

export default SignRouter;
