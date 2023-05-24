import { Button } from '@mui/material';
import food from '../../assets/food.svg';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../../utils/PATH';

const Welcome = () => {
	const navigate = useNavigate();

	const navigateToHome = () => {
		navigate(HOME_PATH);
	};
	return (
		<section
			id='welcome'
			className='text-center py-24 sm:pb-72 sm:flex-wrap sm:justify-between sm:flex sm:flex-row md:min-h-screen lg:pb-64 lg:text-left'
		>
			<div className='m-auto p-7 md:w-2/3 lg:pl-14'>
				<h2 className='text-6xl font-bold font-serif lg:text-7xl'>
					Bienvenida(o)
					<br />
					a
					<br />
					Detective
				</h2>
				<p className='p-2 lg:w-3/5 lg:p-0 lg:text-xl'>
					Existen muchos productos para consumir que se venden por diferentes almacenes, pero cómo
					encontrar el <b>Mejor Precio.</b> Hoy existe <b>Detective </b>
					conocelo:
				</p>
				<Button
					disableElevation
					sx={{ marginTop: '1rem' }}
					variant='contained'
					onClick={navigateToHome}
				>
					Comienza Ya!
				</Button>
			</div>
			<div className='m-auto md:w-1/3'>
				<img src={food} alt='Food bag' className='w-36 m-auto py-10 sm:w-56 md:w-72' />
			</div>
		</section>
	);
};

export default Welcome;
