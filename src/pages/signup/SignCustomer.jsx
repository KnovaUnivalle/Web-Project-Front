import { Button } from '@mui/material';
import SignUpUser from '../../components/forms/SignUpUser';
import { useNavigate } from 'react-router-dom';

const SignCustomer = () => {
	const navigate = useNavigate();

	return (
		<div className='flex font flex-col justify-center align-middle m-auto w-3/4 min-h-screen md:w-2/3 lg:w-1/3'>
			<SignUpUser rol={1} />
			<div className='flex justify-between pt-3'>
				<Button style={{ color: '#6EB500' }} onClick={() => navigate(-1)}>
					Regresar
				</Button>
				<Button style={{ color: '#6EB500' }} onClick={() => navigate('/sign/in')}>
					Iniciar Sesión
				</Button>
			</div>
		</div>
	);
};

export default SignCustomer;
