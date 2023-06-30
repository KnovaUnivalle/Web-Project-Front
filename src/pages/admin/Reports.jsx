import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const topProducts = [
  { id: 97, name: 'recent', price: 172335.08362024557, search_count: 7 },
  { id: 113, name: 'someone', price: 107315.24307152133, search_count: 8 },
  { id: 120, name: 'structure', price: 12719.345357796226, search_count: 8 },
  { id: 156, name: 'help', price: 39158.416212021984, search_count: 9 },
  { id: 186, name: 'fire', price: 73472.22433296693, search_count: 9 },
];

const topProductsColors = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(0, 205, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(201, 203, 207, 0.5)',
];

const topStoresColors = [
  {
    id: 37,
    name: 'Wiley-Hughes',
    price: '0061 James Hill Apt. 916\nBassbury, SC 10573',
    search_count: 104,
  },
  {
    id: 38,
    name: 'Mercado Libre',
    price: 'https://www.mercadolibre.com.co/',
    search_count: 106,
  },
  {
    id: 39,
    name: 'La Cester\u00eda',
    price: 'https://lacesteria.co/',
    search_count: 97,
  },
  {
    id: 40,
    name: 'Lopido.com',
    price: 'https://www.lopido.com/',
    search_count: 104,
  },
];

const topStoresColorsColors = [
  'rgba(55, 6, 23, 0.2)',
  'rgba(157, 2, 8, 0.2)',
  'rgba(208, 0, 0, 0.2)',
  'rgba(232, 93, 4, 0.2)',
  'rgba(250, 163, 7, 0.2)',
];

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

  return <Bar width={80} height={0} data={data} options={options} />;
};

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
      <div style={style}>
        <div style={chartSize}>
          <BarChart
            dataList={topProducts}
            title="Productos más buscados"
            label="Veces que se buscó"
            color={topProductsColors}
            valueName="search_count"
          />
        </div>
        <div style={chartSize}>
          <BarChart
            dataList={topStoresColors}
            title="Tiendas más buscadas"
            label="Veces que se buscó"
            color={topStoresColorsColors}
			valueName="search_count"
          />
        </div>
      </div>
      <div style={style}>
        <div style={chartSize}>
          <BarChart
            dataList={topUsers}
            title="Usuarios con más busquedas"
            label="Búsquedas realizadas"
            color={topUsersColors}
			valueName="search_count"
          />
        </div>
		<div style={chartSize}>
          <BarChart
            dataList={lowerProducts}
            title="Productos más económicos"
            label="Precio"
            color={lowerProductsColors}
			valueName="price"
          />
        </div>
      </div>
    </>
  );
};

export default Reports;
