import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: {
			light: '#8EAE5C',
			main: '#6EB500',
			dark: '#4D7F00',
			contrastText: '#fff',
		},
	},
});

export default theme;
