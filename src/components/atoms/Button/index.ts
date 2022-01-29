import { styled } from '@styles/stiches.config';

export const Button = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '.5rem 1rem',
	border: 'none',
	borderRadius: '.5rem',

	fontSize: '$base',
	fontWeight: '$medium',
	color: '$buttonTextColor',
	background: '$buttonBackground',

	transition: 'filter 0.2s',
	'&:hover': {
		filter: 'brightness(0.9)',
	},
	'&:active': {
		filter: 'brightness(0.8)',
	},
});
