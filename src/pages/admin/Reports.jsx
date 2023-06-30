import CountProducts from '../../components/charts/CountProducts';
import CountStores from '../../components/charts/CountStores';
import CountUsers from '../../components/charts/CountUsers';
import Cheapest from '../../components/charts/Cheapest';

const style = {
	width: '100%',
	height: '50%',
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	flexDirection: 'row',
	padding: '2%',
};

const chartSize = {
	width: '100%',
	height: '100%',
};

const Reports = () => {
	return (
		<>
			<div className='flex flex-wrap flex-col md:flex-row p-3'>
				<div className='md:w-1/2 pb-10'>
					<CountProducts />
				</div>
				<div className='md:w-1/2 pb-10'>
					<CountStores />
				</div>
				<div className='md:w-1/2 pb-10'>
					<CountUsers />
				</div>
				<div className='md:w-1/2 pb-10'>
					<Cheapest />
				</div>
			</div>
		</>
	);
};

export default Reports;
