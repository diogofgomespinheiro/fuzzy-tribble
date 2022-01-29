import * as Styled from './styles';
import { HeadingProps } from './types';

export function Heading({ children, variant = 'h1', colorVariant = 'primary' }: HeadingProps) {
	return (
		<Styled.Heading variant={variant} colorVariant={colorVariant} as={variant}>
			{children}
		</Styled.Heading>
	);
}
