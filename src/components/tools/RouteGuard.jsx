import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { SIGN_IN_PATH } from '../../utils/PATH';

const RouteGuard = ({ children }) => {
	const { token } = useAuth();
	if (token) {
		return children;
	}
	return <Navigate to={SIGN_IN_PATH} />;
};

export default RouteGuard;
