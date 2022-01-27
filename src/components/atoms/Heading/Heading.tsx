import * as Styled from './styles';
import { HeadingProps } from './types';

export function Heading({ children, variant = 'h1' }: HeadingProps) {
	return (
		<Styled.Heading variant={variant} as={variant}>
			{children}
		</Styled.Heading>
	);
}
