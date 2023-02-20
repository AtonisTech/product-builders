const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{ts,tsx}",
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			maxWidth: {
				'1200px': '75rem',
			},
			boxShadow: {
				'light': '1px 1px 3px 0 rgba(0, 0, 0, .2)',
			},
			fontFamily: {
				ibm: ['var(--font-ibm)', ...fontFamily.sans],
				high: ['var(--font-pathway)', ...fontFamily.sans],
			},
			colors: {
				'brand': {
					600: '#df3940',
				},
				'sec-brand': {
					400:"#fde9a5",
					600: '#f9c81b',
				},
				"accent":{
					100:"#8b8089",
					200:"#52414e",
					600:"#3e2b3a"
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('flowbite/plugin')
	],
}
