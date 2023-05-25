import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRouter';
import { ThemeProvider } from '@emotion/react';
import theme from './components/utils/theme';
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
