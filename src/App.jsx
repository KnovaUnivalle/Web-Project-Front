import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRouter';
import { ThemeProvider } from '@emotion/react';
import theme from './components/utils/theme';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from './utils/ENV';
import { AuthProvider } from './hooks/useAuth';

const App = () => {
	return (
		<AuthProvider>
			<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<AppRoutes />
					</BrowserRouter>
				</ThemeProvider>
			</GoogleOAuthProvider>
		</AuthProvider>
	);
};

export default App;
