import type * as Stitches from '@stitches/react';

type TextVariants = 'body1' | 'body2' | 'body3' | 'body4';
type TextColorVariants = 'primary' | 'secondary' | 'accent';
type TextElements = 'p' | 'span';

export interface TextProps {
	children: React.ReactNode;
	colorVariant?: TextColorVariants;
	css?: Stitches.CSS;
	element?: TextElements;
	variant?: TextVariants;
}
