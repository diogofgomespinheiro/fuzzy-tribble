import { styled } from '@styles/stiches.config';

export const Heading = styled('h1', {
	color: '$primaryText',
	fontWeight: '$semiBold',
	variants: {
		variant: {
			h1: {
				fontSize: '$6xl',
				lineHeight: '$6xl',
			},
			h2: {
				fontSize: '$5xl',
				lineHeight: '$5xl',
			},
			h3: {
				fontSize: '$4xl',
				lineHeight: '$4xl',
			},
			h4: {
				fontSize: '$3xl',
				lineHeight: '$3xl',
			},
			h5: {
				fontSize: '$2xl',
				lineHeight: '$2xl',
			},
			h6: {
				fontSize: '$xl',
				lineHeight: '$xl',
			},
		},
	},
});
