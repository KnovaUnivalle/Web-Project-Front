import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			light: '#8EAE5C',
			main: '#6EB500',
			dark: '#4D7F00',
			contrastText: '#FFF',
		},
		secondary: {
			light: '#1596df',
			main: '#127ebb',
			dark: '#0e6697',
			contrastText: '#FFF',
		},
	},
});

export default theme;
