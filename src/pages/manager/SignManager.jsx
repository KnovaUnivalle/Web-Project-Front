import { Button } from '@mui/material';
import SignUpUser from '../../components/forms/SignUpUser';
import { useNavigate } from 'react-router-dom';
import FormContainter from '../../components/containers/FormContainter';

const SignManager = () => {
	const navigate = useNavigate();

	return (
		<FormContainter>
			<SignUpUser rol={2} />
			<div className='flex justify-between pt-3'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
				<Button onClick={() => navigate('/sign/in')}>Iniciar Sesión</Button>
			</div>
		</FormContainter>
	);
};

export default SignManager;
