import Detective from '../buttons/Detective';
import LandMenu from '../menus/LandMenu';
import Movil from '../menus/Movil';

const pages = [
	{ title: 'Inicio', id: '/' },
	{ title: 'Servicio', id: '/service' },
	{ title: 'Equipo', id: '/team' },
	{ title: 'Registrarse', id: '/sign/up/customer' },
	{ title: 'Iniciar Sesión', id: '/sign/in' },
];

const LandHeader = () => {
	return (
		<header className='bg-softgrey px-3 pt-3 sm:pt-7 lg:px-12 '>
			<nav className='flex justify-between'>
				<Detective />
				<Movil pages={pages} />
				<LandMenu pages={pages} />
			</nav>
		</header>
	);
};

export default LandHeader;
