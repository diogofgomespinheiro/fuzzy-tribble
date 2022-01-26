import { createStitches } from '@stitches/react';

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
		fontWeights: {
			regular: 400,
			medium: 500,
			semiBold: 600,
		},
	},
	utils: {
		mX: (value: number) => ({ marginLeft: value, marginRight: value }),
		mY: (value: number) => ({ marginTop: value, marginBottom: value }),
		pX: (value: number) => ({ paddingLeft: value, paddingRight: value }),
		pY: (value: number) => ({ paddingTop: value, paddingBottom: value }),
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
