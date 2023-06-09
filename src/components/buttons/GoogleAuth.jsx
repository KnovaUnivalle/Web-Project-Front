import { Google } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleAuth = ({ onSuccess }) => {
	const GoogleLogin = useGoogleLogin({
		onSuccess: (credentialResponse) => {
			onSuccess(credentialResponse);
		},
		flow: 'auth-code',
	});
	return (
		<div className='flex justify-center'>
			<Button onClick={GoogleLogin} variant='outlined' fullWidth>
				<Google />
				<Typography p={'0rem 0.5rem'}>Accede</Typography>
			</Button>
		</div>
	);
};

export default GoogleAuth;
