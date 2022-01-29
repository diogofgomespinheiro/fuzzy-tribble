import { styled } from '@styles/stiches.config';

export const Text = styled('p', {
	variants: {
		colorVariant: {
			primary: {
				color: '$primaryText',
			},
			secondary: {
				color: '$secondaryText',
			},
			accent: {
				color: '$accent',
			},
		},
		variant: {
			body1: {
				fontSize: '$lg',
				lineHeight: '$lg',
			},
			body2: {
				fontSize: '$base',
				lineHeight: '$base',
			},
			body3: {
				fontSize: '$sm',
				lineHeight: '$sm',
			},
			body4: {
				fontSize: '$xs',
				lineHeight: '$xs',
			},
		},
	},
});
