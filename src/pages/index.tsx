import type { NextPage } from 'next';

import { Heading, Text } from '@atoms';
import { ThemeToggle } from '../ThemeToogle';

const Home: NextPage = () => {
	return (
		<div>
			<Heading variant="h1">Hello World</Heading>
			<Text>This is a test</Text>
			<ThemeToggle />
		</div>
	);
};

export default Home;
