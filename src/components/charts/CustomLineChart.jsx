import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const defaultData = [
	{
		name: 'Mañana',
		pv: 2400,
	},
	{
		name: 'Medio Día',
		pv: 1398,
	},
	{
		name: 'Tarde',
		pv: 9800,
	},
	{
		name: 'Noche',
		pv: 3908,
	},
];

const CustomLineChart = ({ data = defaultData, to = '/', title = 'LineChart' }) => {
	const navigate = useNavigate();
	return (
		<section className='py-3'>
			<div className=' flex justify-between py-1'>
				<h2 className='text-xl font-bold font-serif lg:text-2xl'> {title}</h2>
				<Button onClick={() => navigate(to)}>
					<p className='text-lg font-semibold '>Más</p>
				</Button>
			</div>
			<div className='border-x border-t shadow-md w-full h-96 p-3 lg:h-80'>
				<ResponsiveContainer>
					<LineChart
						data={data}
						margin={{
							top: 16,
							right: 16,
							bottom: 4,
							left: 0,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type='monotone'
							dataKey='pv'
							stroke='#8884d8'
							strokeWidth={2}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
};

export default CustomLineChart;
