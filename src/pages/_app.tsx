import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { lightTheme, darkTheme } from '@styles/stiches.config';
import { globalStyles } from '@styles/global';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			value={{ dark: darkTheme.className, light: lightTheme.className }}
		>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
