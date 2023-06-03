import NavBarOperations from '../components/navbar/NavBarOperations';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import {
	GRAPHICS_MANAGER_PATH,
	MANAGER_HOME_PATH,
	SIGN_OUT_PATH,
	USERS_MANAGER_PATH,
} from '../utils/PATH';
import ManagerRouter from '../routes/ManagerRouter';

const menus = [
	{ title: 'Inicio', icon: <HomeIcon />, url: MANAGER_HOME_PATH, divider: true },
	{ title: 'Usuarios', icon: <PersonIcon />, url: USERS_MANAGER_PATH, divider: true },
	{ title: 'Noticias', icon: <NewspaperIcon />, url: GRAPHICS_MANAGER_PATH, divider: true },
	{ title: 'Reportes', icon: <BarChartIcon />, url: GRAPHICS_MANAGER_PATH, divider: true },
	{ title: 'Cerrar Sesión', icon: <LogoutIcon />, url: SIGN_OUT_PATH, divider: true },
];

const Manager = () => {
	return <NavBarOperations body={<ManagerRouter />} menus={menus} title='Administrador' />;
};

export default Manager;
