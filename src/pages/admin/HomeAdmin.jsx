import CustomLineChart from '../../components/charts/CustomLineChart';
import ShortUsers from '../../components/sections/ShortUsers';
import { GRAPHICS_ADMIN_PATH } from '../../utils/PATH';

const HomeAdmin = () => {
	return (
		<>
			<ShortUsers />
			<CustomLineChart to={GRAPHICS_ADMIN_PATH} title='Consultas Hoy' />
		</>
	);
};

export default HomeAdmin;
