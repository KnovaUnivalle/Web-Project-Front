/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				softlime: '#6EB500',
				softblue: '#127ebb',
				softorange: '#FFA200',
				softgrey: '#f7f7f7',
			},
			backgroundImage: {
				food: "url('/food_bg.png')",
			},
			height: {
				128: '32rem',
				140: '38rem',
				152: '44rem',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},

	plugins: [],
};
