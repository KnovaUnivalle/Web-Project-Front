import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotMatch = () => {
	const navigate = useNavigate();
	return (
		<div className='h-full flex pt-20 m-auto flex-col text-center justify-center align-middle'>
			<h1 className=' text-4xl font-semibold'>Parece que te has perdido</h1>
			<h2 className=' text-xl font-medium'>Está ruta no tiene contenido</h2>
			<section>
				<ul>
					<li>
						<Button sx={{ color: '#6EB500' }} onClick={() => navigate('/home')}>
							Vuelve al Home
						</Button>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default NotMatch;
