import { globalCss, darkTheme } from './stiches.config';

export const globalStyles = globalCss({
	'*': { margin: 0, padding: 0 },
	'*, *::before, *::after': { boxSizing: 'border-box' },
	'html, body, #__next': { height: '100*' },
	body: {
		'-webkit-font-smoothing': 'antialiased',
		background: '$background',
		transition: 'color 500ms ease 0s, background 500ms ease 0s',
	},
	'img, picture, video, canvas, svg': { display: 'block', maxWidth: '100%' },
	'input, button, textarea, select': { font: 'inherit' },
	'p, h1, h2, h3, h4, h5, h6': { overflowWrap: 'break-word' },
	'#__next': { isolation: 'isolate' },
	'body, input, textarea, select, button': {
		fontFamily: '$body',
		fontSize: '1rem',
		fontWeight: '$regular',
	},
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
	'@dark': {
		':root:not(.light)': {
			...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
				// @ts-ignore
				const currentColor = darkTheme.colors[currentColorKey];
				const currentColorValue =
					currentColor.value.substring(0, 1) === '$'
						? `$colors${currentColor.value}`
						: currentColor.value;

				return {
					[currentColor.variable]: currentColorValue,
					...varSet,
				};
			}, {}),
		},
	},
});
