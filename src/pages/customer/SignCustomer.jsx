import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SignUpUser from '../../components/forms/SignUpUser';
import { SIGN_IN_PATH } from '../../utils/PATH';
import FormContainter from '../../components/containers/FormContainter';

const SignCustomer = () => {
	const navigate = useNavigate();

	return (
		<FormContainter>
			<SignUpUser rol={1} />
			<div className='flex justify-between pt-3'>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
				<Button onClick={() => navigate(SIGN_IN_PATH)}>Iniciar Sesión</Button>
			</div>
		</FormContainter>
	);
};

export default SignCustomer;
