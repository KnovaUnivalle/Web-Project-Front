import NavBarOperations from '../components/navbar/NavBarOperations';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

const menus = [
	{ title: 'Inicio', icon: <HomeIcon />, url: '', divider: true },
	{ title: 'Usuarios', icon: <PersonIcon />, url: '', divider: false },
	{ title: 'Agregar Usuario', icon: <PersonAddAlt1Icon />, url: '', divider: false },
	{ title: 'Modificar Usuario', icon: <ManageAccountsIcon />, url: '', divider: true },
	{ title: 'Gráficos', icon: <BarChartIcon />, url: '', divider: true },
	{ title: 'Cerrar Sesión', icon: <LogoutIcon />, url: '', divider: true },
];

const Admin = () => {
	return <NavBarOperations body={<div> Admin</div>} menus={menus} title='Administrador' />;
};

export default Admin;
