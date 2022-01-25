import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
	createStitches({
		theme: {
			colors: {
				gray400: 'gainsboro',
				gray500: 'lightgray',
			},
		},
		utils: {
			mX: (value: number) => ({ marginLeft: value, marginRight: value }),
			mY: (value: number) => ({ marginTop: value, marginBottom: value }),
			pX: (value: number) => ({ paddingLeft: value, paddingRight: value }),
			pY: (value: number) => ({ paddingTop: value, paddingBottom: value }),
		},
	});

export const globalStyles = globalCss({
	'*': { margin: 0, padding: 0 },
	'*, *::before, *::after': { boxSizing: 'border-box' },
	'html, body, #__next': { height: '100*' },
	body: { lineHeight: 'calc(1em + 0.5rem)', '-webkit-font-smoothing': 'antialiased' },
	'img, picture, video, canvas, svg': { display: 'block', maxWidth: '100%' },
	'input, button, textarea, select': { font: 'inherit' },
	'p, h1, h2, h3, h4, h5, h6': { overflowWrap: 'break-word' },
	'#__next': { isolation: 'isolate' },
	'body, input, textarea, select, button': { font: '400 1rem "Poppins", sans-serif' },
	button: { cursor: 'pointer' },
	a: { color: 'inherit', textDecoration: 'none' },
	'@media (max-width: 1080px)': {
		html: {
			fontSize: '93.75%',
		},
	},
	'@media (max-width: 720px)': {
		html: {
			fontSize: '87.5%',
		},
	},
});
