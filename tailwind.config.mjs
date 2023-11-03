/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				'text': '1em',
			},
			screens: {
				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'primary': "#372922",
			"beige": "#F7ECE4",
			"white": "#fff",
			"highlight": "#DEAA82"
		},
		fontFamily: {
			sans: ['Source Sans Pro', 'sans-serif'],
			serif: ['Playfair Display Variable', 'serif'],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				xl: '4rem',
			},
		},
	},
	plugins: [],
}
