import { useState, useEffect } from 'react';
import BarChart from './Barchart';
import API from '../../utils/API';
import Loader from '../tools/Loader';

const topUsers = [
	{ id: 5, name: 'Customer2', last_name: 'Base2', search_count: 63 },
	{ id: 6, name: 'Customer3', last_name: 'Base3', search_count: 62 },
	{ id: 7, name: 'Customer4', last_name: 'Base4', search_count: 76 },
	{ id: 8, name: 'Customer5', last_name: 'Base5', search_count: 67 },
	{ id: 9, name: 'Christian', last_name: 'Sanchez', search_count: 81 },
];

const topUsersColors = [
	'rgba(3, 4, 94, 0.5)',
	'rgba(0, 119, 182, 0.5)',
	'rgba(0, 180, 216, 0.5)',
	'rgba(144, 224, 239, 0.5)',
	'rgba(202, 240, 248, 0.5)',
];

const CountUsers = () => {
	const [dataList, setDataList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		API.get('/reports/?q=top_users').then((response) => {
			if (response.status === 200) {
				setDataList(response.data);
				setLoading(false);
			}
		});
	}, []);

	return (
		<>
			{loading ? (
				<div className='flex justify-center m-auto'>
					<Loader />
				</div>
			) : (
				<BarChart
					dataList={dataList}
					title='Usuarios con más busquedas'
					label='Búsquedas realizadas'
					color={topUsersColors}
					valueName='search_count'
				/>
			)}
		</>
	);
};

export default CountUsers;