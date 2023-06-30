import { useState, useEffect } from 'react';
import BarChart from './Barchart';
import API from '../../utils/API';
import Loader from '../tools/Loader';

const topProductsColors = [
	'rgba(255, 99, 132, 0.5)',
	'rgba(255, 159, 64, 0.5)',
	'rgba(0, 205, 86, 0.5)',
	'rgba(75, 192, 192, 0.5)',
	'rgba(54, 162, 235, 0.5)',
	'rgba(153, 102, 255, 0.5)',
	'rgba(201, 203, 207, 0.5)',
];

const CountProducts = () => {
	const [dataList, setDataList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		API.get('/reports/?q=top_products').then((response) => {
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
					title='Productos más buscados'
					label='Veces que se buscó'
					color={topProductsColors}
					valueName='search_count'
				/>
			)}
		</>
	);
};

export default CountProducts;