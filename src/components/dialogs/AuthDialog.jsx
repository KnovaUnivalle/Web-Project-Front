import { useNavigate } from 'react-router-dom';
import InfoDialog from './InfoDialog';
import { HOME_PATHS, SIGN_IN_PATH } from '../../utils/PATH';
import { useAuth } from '../../hooks/useAuth';

const noAuthenticatedMsg = {
	title: 'No has iniciado sesión',
	body: 'Por favor inicia sesión',
};

const NoAuthorizeddMsg = {
	title: 'No estás autorizado',
	body: 'Debes ser un usuario con los permisos correctos',
};

const AuthDialog = ({ noAuthenticated = false, NoAuthorized = false }) => {
	const navigate = useNavigate();
	const { rol, logout } = useAuth();

	const onCloseNoAuthorized = () => {
		navigate(HOME_PATHS[rol]);
	};

	const onCloseNoAuthenticated = () => {
		logout(() => navigate(SIGN_IN_PATH));
	};

	return (
		<>
			<InfoDialog
				open={noAuthenticated}
				message={noAuthenticatedMsg}
				close={onCloseNoAuthenticated}
			/>
			<InfoDialog open={NoAuthorized} message={NoAuthorizeddMsg} close={onCloseNoAuthorized} />
		</>
	);
};

export default AuthDialog;
