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
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Medio Día',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Tarde',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Noche',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
];

const CustomLineChart = ({ data = defaultData }) => {
	return (
		<section className='py-4'>
			<h1 className='text-xl font-bold font-serif lg:text-2xl py-1'>Consultas Hoy</h1>
			<div className='border-x border-t shadow-md w-full h-96 lg:h-80'>
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
						<Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
						<Line type='monotone' dataKey='uv' stroke='#82ca9d' />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
};

export default CustomLineChart;
