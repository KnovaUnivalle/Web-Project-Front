import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarChart = ({ dataList, title, label, color, valueName }) => {
	// Data for the chart
	const labels = dataList.map((product) => product.name);
	const value = dataList.map((product) => product[valueName]);

	// Settings
	const data = {
		labels: labels,
		datasets: [
			{
				axis: 'y',
				barPercentage: 1,
				maxBarThickness: 100,
				label: label,
				data: value,
				backgroundColor: color,
			},
		],
	};

	const options = {
		indexAxis: 'y',
		responsive: true,
		aspectRatio: 2,
		resizeDelay: 0,
		maintainAspectRatio: true,
		scales: {
			x: {
				type: 'linear',
				beginAtZero: true,
				max: Math.max(...value) + 1,
			},
		},
		plugins: {
			legend: {
				labels: {
					font: {
						size: 14,
					},
				},
			},
			title: {
				display: true,
				text: title,
			},
		},
	};

	return <Bar data={data} options={options} />;
};

export default BarChart;