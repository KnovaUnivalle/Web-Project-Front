import CustomLineChart from '../../components/charts/CustomLineChart';
import Users from '../../components/tables/Users';
import { GRAPHICS_ADMIN_PATH } from '../../utils/PATH';

const HomeAdmin = () => {
	return (
		<>
			<Users />
			<CustomLineChart to={GRAPHICS_ADMIN_PATH} title='Consultas Hoy' />
		</>
	);
};

export default HomeAdmin;
