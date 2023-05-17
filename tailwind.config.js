/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				softlime: '#6EB500',
				softblue: '#104BA9',
				softorange: '#FFA200',
				softgrey: '#f7f7f7',
			},
			backgroundImage: {
				food: "url('/src/assets/bg_food.jpg')",
			},
			height: {
				128: '32rem',
			},
		},
	},

	plugins: [],
};
