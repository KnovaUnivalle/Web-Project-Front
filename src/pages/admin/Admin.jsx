import NavBarOperations from '../../components/navbar/NavBarOperations';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import {
	ADD_USER_ADMIN_PATH,
	ADMIN_HOME_PATH,
	GRAPHICS_ADMIN_PATH,
	SIGN_OUT_PATH,
	USERS_ADMIN_PATH,
} from '../../utils/PATH';
import AdminRouter from '../../routes/AdminRouter';

const menus = [
	{ title: 'Inicio', icon: <HomeIcon />, url: ADMIN_HOME_PATH, divider: true },
	{ title: 'Usuarios', icon: <PersonIcon />, url: USERS_ADMIN_PATH, divider: false },
	{
		title: 'Agregar Usuario',
		icon: <PersonAddAlt1Icon />,
		url: ADD_USER_ADMIN_PATH,
		divider: true,
	},
	{ title: 'Reportes', icon: <BarChartIcon />, url: GRAPHICS_ADMIN_PATH, divider: true },
	{ title: 'Cerrar Sesión', icon: <LogoutIcon />, url: SIGN_OUT_PATH, divider: true },
];

const Admin = () => {
	return <NavBarOperations body={<AdminRouter />} menus={menus} title='Administrador' />;
};

export default Admin;
