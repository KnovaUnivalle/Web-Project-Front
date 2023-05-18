import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const NotFound = lazy(() => import('../pages/NotFound'));

const SignRouter = () => {
	return (
		<>
			<Routes>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
};

export default SignRouter;
