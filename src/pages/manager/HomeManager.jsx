import CustomLineChart from '../../components/charts/CustomLineChart';
import CardsManager from '../../components/sections/CardsManager';
import { GRAPHICS_MANAGER_PATH } from '../../utils/PATH';

const HomeManager = () => {
	return (
		<>
			<CardsManager />
			<CustomLineChart to={GRAPHICS_MANAGER_PATH} title='Consultas Hoy' />
		</>
	);
};

export default HomeManager;
