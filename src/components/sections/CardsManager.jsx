import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GRAPHICS_ADMIN_PATH, NEWS_MANAGER_PATH, USERS_MANAGER_PATH } from '../../utils/PATH';

const Card = ({ title, text, navigate }) => {
	return (
		<div className='border-x border-t shadow-md p-2 w-full md:p-4 md:w-1/3'>
			<h2 className='text-xl font-bold font-serif lg:text-2xl '>{title}</h2>
			<p className='h-20'>{text}</p>
			<div className='flex justify-end pr-2 pt-2'>
				<Button onClick={navigate}>
					<p className='text-lg font-semibold '>Accede Aquí</p>
				</Button>
			</div>
		</div>
	);
};

const CardsManager = () => {
	const navigate = useNavigate();
	return (
		<section className='py-3 flex flex-row gap-4 flex-wrap md:flex-nowrap md:h-1/3'>
			<Card
				title={'Usuarios'}
				text={
					'Encuentra la información (correo, tipo de usuario, estado, nombre) acerca de los usuarios registrados en Detective.'
				}
				navigate={() => navigate(USERS_MANAGER_PATH)}
			/>
			<Card
				title={'Noticias'}
				text={'Crear, modifica o elimina las noticia que van a ser publicidas en Detective.'}
				navigate={() => navigate(NEWS_MANAGER_PATH)}
			/>
			<Card
				title={'Reportes'}
				text={'Consulta el estado de Detective, y las diferentes graficas que se generan.'}
				navigate={() => navigate(GRAPHICS_ADMIN_PATH)}
			/>
		</section>
	);
};

export default CardsManager;
