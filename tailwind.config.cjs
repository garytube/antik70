/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			gridTemplateColumns: {
				about: '1.5fr 0.6fr',
				hero: 'minmax(250px, 1fr) 1fr',
				footer: '230px 230px 230px 1fr'
			},
			borderRadius: {
				text: '1em'
			},
			fontSize: {
				'6xl': ['58px', '68px'],
				'7xl': ['72px', '80px']
			},
			screens: {
				'2xl': '1536px'
			},
			letterSpacing: {
				widest2: '0.2em'
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			primary: {
				DEFAULT: '#2C1A12',
				DARK: '#1a0f09',
				VERYDARK: 'rgb(14 8 4)'
			},
			amber: {
				DEFAULT: '#C8965A',
				LIGHT: '#DEAA82',
				DARK: '#9A6A38'
			},
			beige: {
				DEFAULT: '#F5EDE3',
				DARK: '#EAD9C8',
				LIGHT: '#FAF5F0'
			},
			stone: '#8C7B6E',
			white: '#fff'
		},
		fontFamily: {
			sans: ['Source Sans Pro', 'sans-serif'],
			serif: ['Playfair Display', 'serif']
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				xl: '4rem'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
