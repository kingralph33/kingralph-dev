module.exports = {
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			sans: ['Cantarell', 'sans-serif'],
		},
		extend: {
			colors: {
				'dark-blue': '#141e30',
			},
		},
	},
	plugins: [],
};
