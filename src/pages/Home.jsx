import {
	LANDING_PAGE_PATH,
	LAND_SERVICE_PATH,
	LAND_TEAM_PATH,
	SIGN_IN_PATH,
	SIGN_UP_CUSTOMER_PATH,
} from '../utils/PATH';
import Detective from '../components/buttons/Detective';
import LandMenu from '../components/menus/LandMenu';
import Movil from '../components/menus/Movil';
import Search from '../components/forms/Search';

const pages = [
	{ title: 'Inicio', id: LANDING_PAGE_PATH },
	{ title: 'Servicio', id: LAND_SERVICE_PATH },
	{ title: 'Equipo', id: LAND_TEAM_PATH },
	{ title: 'Registrarse', id: SIGN_UP_CUSTOMER_PATH },
	{ title: 'Iniciar Sesión', id: SIGN_IN_PATH },
];

const Home = () => {
	return (
		<header className=' px-3 pt-3 sm:pt-7 lg:px-12 '>
			<nav className='min-w-full'>
				<div className='flex justify-between'>
					<Detective />
					<LandMenu pages={pages} />
					<Movil pages={pages} />
				</div>
				<div className='grow'>
					<Search />
				</div>
			</nav>
		</header>
	);
};

export default Home;
