import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRouter';
const App = () => {
	return (
		<>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</>
	);
};

export { App };
export default App;
