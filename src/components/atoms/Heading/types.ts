type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingColorVariants = 'primary' | 'secondary' | 'accent';

export interface HeadingProps {
	variant?: HeadingVariants;
	colorVariant?: HeadingColorVariants;
	children: React.ReactNode;
}
