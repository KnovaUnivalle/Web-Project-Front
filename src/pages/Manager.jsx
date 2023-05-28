import NavBarOperations from '../components/navbar/NavBarOperations';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

const menus = [
	{ title: 'Inicio', icon: <HomeIcon />, url: '', divider: true },
	{ title: 'Usuarios', icon: <PersonIcon />, url: '', divider: true },
	{ title: 'Gráficos', icon: <BarChartIcon />, url: '', divider: true },
	{ title: 'Cerrar Sesión', icon: <LogoutIcon />, url: '', divider: true },
];

const Manager = () => {
	return <NavBarOperations body={<div>Manager</div>} menus={menus} title='Administrador' />;
};

export default Manager;
