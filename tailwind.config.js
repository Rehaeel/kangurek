/** @type {import('tailwindcss').Config} */
module.exports = {
	module: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'text-color': '#6e6e6e',
				'orange-color': '#e09900',
				'orange-darker-color': '#cc8b00',
				'orange-lighter-color': '#ffae00',
				'active-link-color': '#f0a400',
			},
		},
	},
	plugins: [],
};
