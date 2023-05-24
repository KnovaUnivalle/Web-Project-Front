import {
	LANDING_PAGE_PATH,
	LAND_SERVICE_PATH,
	LAND_TEAM_PATH,
	SIGN_IN_PATH,
	SIGN_UP_CUSTOMER_PATH,
} from '../../utils/PATH';
import Detective from '../buttons/Detective';
import LandMenu from '../menus/LandMenu';
import Movil from '../menus/Movil';

const pages = [
	{ title: 'Inicio', id: LANDING_PAGE_PATH },
	{ title: 'Servicio', id: LAND_SERVICE_PATH },
	{ title: 'Equipo', id: LAND_TEAM_PATH },
	{ title: 'Registrarse', id: SIGN_UP_CUSTOMER_PATH },
	{ title: 'Iniciar Sesión', id: SIGN_IN_PATH },
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
