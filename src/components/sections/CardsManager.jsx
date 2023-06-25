import { useNavigate } from 'react-router-dom';
import { GRAPHICS_ADMIN_PATH, NEWS_MANAGER_PATH, USERS_MANAGER_PATH } from '../../utils/PATH';
import ManagerHomeCard from '../card/ManagerHomeCard';

const CardsManager = () => {
	const navigate = useNavigate();
	return (
		<section className='py-3 flex flex-row gap-4 flex-wrap md:flex-nowrap md:h-1/3'>
			<ManagerHomeCard
				title={'Usuarios'}
				text={
					'Encuentra la información (correo, tipo de usuario, estado, nombre) acerca de los usuarios registrados en Detective.'
				}
				navigate={() => navigate(USERS_MANAGER_PATH)}
			/>
			<ManagerHomeCard
				title={'Noticias'}
				text={'Crear, modifica o elimina las noticia que van a ser publicidas en Detective.'}
				navigate={() => navigate(NEWS_MANAGER_PATH)}
			/>
			<ManagerHomeCard
				title={'Reportes'}
				text={'Consulta el estado de Detective, y las diferentes graficas que se generan.'}
				navigate={() => navigate(GRAPHICS_ADMIN_PATH)}
			/>
		</section>
	);
};

export default CardsManager;
