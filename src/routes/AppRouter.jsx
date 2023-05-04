import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/*' element={<div>Home</div>} />
				<Route path='/land*' element={<div>Landing Page</div>} />
			</Routes>
		</>
	);
};

export default AppRoutes;
