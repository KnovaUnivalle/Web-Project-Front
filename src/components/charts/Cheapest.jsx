import { useState, useEffect } from 'react';
import BarChart from './Barchart';
import API from '../../utils/API';
import Loader from '../tools/Loader';

const lowerProducts = [
	{ id: 140, name: 'claim', price: 985.7645881614271 },
	{ id: 132, name: 'leg', price: 1553.5145779559164 },
	{ id: 86, name: 'born', price: 1623.5659936688767 },
	{
		id: 196,
		name: 'Alimento Para Gato -chunky Delicat Pollo 80 Gr',
		price: 3500.0,
	},
	{
		id: 197,
		name: 'Alimento Para Gato -chunky Delicat Pollo 80 Gr',
		price: 3500.0,
	},
];

const lowerProductsColors = [
	'rgba(0, 15, 35, 0.2)',
	'rgba(0, 56, 91, 0.2)',
	'rgba(0, 106, 159, 0.2)',
	'rgba(0, 168, 237, 0.2)',
	'rgba(0, 242, 255 , 0.2)',
];

const Cheapest = () => {
	const [dataList, setDataList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		API.get('/reports/?q=lower_products').then((response) => {
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
					title='Productos más económicos'
					label='Precio'
					color={lowerProductsColors}
					valueName='price'
				/>
			)}
		</>
	);
};

export default Cheapest;