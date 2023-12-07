/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			gridTemplateColumns: {
				hero: 'minmax(250px, 1fr) 1fr',
				'footer': '230px 230px 230px 1fr',
			},
			borderRadius: {
				text: '1em'
			},
			fontSize: {
				'6xl': ['58px', '72px']
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
				DARK: '#21130C',
				VERYDARK: 'rgb(21 16 13)'
			},
			redish: '#5f1616',
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

	plugins: [
		require('@tailwindcss/typography'),
	]
};

module.exports = config;
