import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
