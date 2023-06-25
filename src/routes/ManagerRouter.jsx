import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const NotMatch = lazy(() => import('../pages/NotMatch'));
const HomeManager = lazy(() => import('../pages/manager/HomeManager'));
const NewsManager = lazy(() => import('../pages/manager/news/NewsManager'));
const NewsAdd = lazy(() => import('../pages/manager/news/NewsAdd'));
const NewsEdit = lazy(() => import('../pages/manager/news/NewsEdit'));
const NewsDetails = lazy(() => import('../pages/manager/news/NewsDetails'));
import Loading from '../pages/Loading';
import {
	NEWS_ADD_MANAGER_AS_PATH,
	NEWS_EDIT_MANAGER_AS_PATH,
	NEWS_MANAGER_AS_PATH,
} from '../utils/PATH';

const ManagerRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path='*' element={<NotMatch />} />
				<Route path={'/'} element={<HomeManager />} />
				<Route path={NEWS_MANAGER_AS_PATH} element={<NewsManager />} />
				<Route path={`${NEWS_MANAGER_AS_PATH}/:id`} element={<NewsDetails />} />
				<Route path={NEWS_ADD_MANAGER_AS_PATH} element={<NewsAdd />} />
				<Route path={`${NEWS_EDIT_MANAGER_AS_PATH}/:id`} element={<NewsEdit />} />
			</Routes>
		</Suspense>
	);
};

export default ManagerRouter;
