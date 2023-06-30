import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LANDING_PAGE_PATH } from '../utils/PATH';

const SignOut = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	const goPage = () => {
		navigate(-1);
	};

	const handleLogOut = () => {
		logout(() => navigate(LANDING_PAGE_PATH));
	};

	return (
		<main className='flex justify-center min-h-screen'>
			<div className='m-auto ring-4 shadow-xl rounded-xl ring-gray-400 p-8 flex gap-1 flex-col'>
				<h1 className='text-center text-3xl font-semibold font-serif text-gray-500'>
					Confimar cerrar sesión
				</h1>
				<p className='text-gray-500'>¿Estás seguro de querer cerrar sesión?</p>
				<div className='flex justify-between pt-3'>
					<Button color='error' variant='contained' onClick={goPage}>
						Cancelar
					</Button>
					<Button color='info' variant='contained' onClick={handleLogOut}>
						Confirmar
					</Button>
				</div>
			</div>
		</main>
	);
};

export default SignOut;
