import Detective from '../buttons/Detective';
import LandMenu from '../menus/LandMenu';
import Movil from '../menus/Movil';

const pages = [
	{ title: 'Home', id: '/home' },
	{ title: 'Nuestro Servicio', id: '/home/service' },
	{ title: 'Nuestro Equipo', id: '/home/team' },
	{ title: 'Iniciar Sesión', id: '/login' },
];

const LandHeader = () => {
	return (
		<>
			<header className='bg-softgrey px-3 pt-3 sm:pt-7 lg:px-12 '>
				<nav className='flex justify-between'>
					<Detective />
					<Movil pages={pages} />
					<LandMenu pages={pages} />
				</nav>
			</header>
		</>
	);
};

export default LandHeader;
