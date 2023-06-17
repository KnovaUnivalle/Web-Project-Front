import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from '../pages/Loading';
import { NEWS_MANAGER_AS_PATH } from '../utils/PATH';
const NotMatch = lazy(() => import('../pages/NotMatch'));
const HomeManager = lazy(() => import('../pages/manager/HomeManager'));
const NewsManager = lazy(() => import('../pages/manager/news/NewsManager'));

const ManagerRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path={'/'} element={<HomeManager />} />
				<Route path={NEWS_MANAGER_AS_PATH} element={<NewsManager />} />
			</Routes>
		</Suspense>
	);
};

export default ManagerRouter;
