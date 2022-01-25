import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '@styles/stiches.config';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
						rel="stylesheet"
					/>
					<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
