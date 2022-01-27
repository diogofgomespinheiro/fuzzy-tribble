import { createStitches, ScaleValue } from '@stitches/react';

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme: lightTheme,
	createTheme,
	config,
} = createStitches({
	theme: {
		colors: {
			accent: '#dE9d7b',
			background: '#fafbff',
			primaryText: '#555b6e',
			secondaryText: '#a2a5af',
		},
		fonts: {
			heading: 'Poppins, sans-serif',
			body: 'Poppins, sans-serif',
		},
		fontSizes: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
		},
		fontWeights: {
			regular: 400,
			medium: 500,
			semiBold: 600,
		},
		lineHeights: {
			xs: '1rem',
			sm: '1.25rem',
			base: '1.5rem',
			lg: '1.75rem',
			xl: '1.75rem',
			'2xl': '2rem',
			'3xl': '2.25rem',
			'4xl': '2.5rem',
			'5xl': 1,
			'6xl': 1,
		},
	},
	utils: {
		mX: (value: ScaleValue<'space'>) => ({ marginLeft: value, marginRight: value }),
		mY: (value: ScaleValue<'space'>) => ({ marginTop: value, marginBottom: value }),
		pX: (value: ScaleValue<'space'>) => ({ paddingLeft: value, paddingRight: value }),
		pY: (value: ScaleValue<'space'>) => ({ paddingTop: value, paddingBottom: value }),
	},
});

export const darkTheme = createTheme({
	colors: {
		accent: '#dE9d7b',
		background: '#100E17',
		primaryText: '#fafbff',
		secondaryText: '#a2a5af',
	},
});
