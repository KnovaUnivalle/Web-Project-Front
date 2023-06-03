import CustomLineChart from '../../components/charts/CustomLineChart';
import { GRAPHICS_MANAGER_PATH } from '../../utils/PATH';

const HomeManager = () => {
	return (
		<>
			<CustomLineChart to={GRAPHICS_MANAGER_PATH} title='Consultas Hoy' />
		</>
	);
};

export default HomeManager;
