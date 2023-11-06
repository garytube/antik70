/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			gridTemplateColumns: {
				hero: 'minmax(250px, 1fr) 1fr'
			},
			borderRadius: {
				text: '1em'
			},
			screens: {
				'2xl': '1536px'
				// => @media (min-width: 1536px) { ... }
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			primary: {
				DEFAULT: '#372922',
				DARK: '#21130C'
			},
			beige: '#F7ECE4',
			white: '#fff',
			highlight: '#DEAA82'
		},
		fontFamily: {
			sans: ['Source Sans Pro', 'sans-serif'],
			serif: ['Playfair Display', 'serif']
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				xl: '4rem'
			}
		}
	},

	plugins: []
};

module.exports = config;
