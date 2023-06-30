import { useState, useEffect } from 'react';
import BarChart from './Barchart';
import API from '../../utils/API';
import Loader from '../tools/Loader';

const topStoresColorsColors = [
	'rgba(55, 6, 23, 0.2)',
	'rgba(157, 2, 8, 0.2)',
	'rgba(208, 0, 0, 0.2)',
	'rgba(232, 93, 4, 0.2)',
	'rgba(250, 163, 7, 0.2)',
];

const CountStores = () => {
	const [dataList, setDataList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		API.get('/reports/?q=top_store').then((response) => {
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
					title='Tiendas más buscadas'
					label='Veces que se buscó'
					color={topStoresColorsColors}
					valueName='search_count'
				/>
			)}
		</>
	);
};

export default CountStores;