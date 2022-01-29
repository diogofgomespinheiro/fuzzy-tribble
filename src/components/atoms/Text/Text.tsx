import * as Styled from './styles';
import { TextProps } from './types';

export function Text({
	children,
	colorVariant = 'primary',
	element = 'p',
	variant = 'body1',
	...props
}: TextProps) {
	return (
		<Styled.Text colorVariant={colorVariant} variant={variant} as={element} {...props}>
			{children}
		</Styled.Text>
	);
}
