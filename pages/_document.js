import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Pixels from '../config/Pixels';
export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					<Pixels />
					<script
						id={'mainOrig'}
						async
						src="https://ft.com/partnercontent/cms/ftStyle.js"
					></script>
					<link
						rel="icon"
						type="image/png"
						href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&amp;width=32&amp;height=32&amp;format=png"
						sizes="32x32"
					/>
					<link
						rel="icon"
						type="image/png"
						href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&amp;width=194&amp;height=194&amp;format=png"
						sizes="194x194"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&amp;width=180&amp;height=180&amp;format=png"
					/>
					<meta name="msapplication-TileColor" content="#fff1e0" />
					<meta
						name="msapplication-TileImage"
						content="https://www.ft.com/__assets/creatives/brand-ft/icons/v3/mstile-144x144.png"
					/>

					<link
						rel="stylesheet"
						href="https://ft.com/partnercontent/cms/ftStyle.css"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.7.5/swiper-bundle.css"
						integrity="sha512-QVtxgaHBBkLhZUCbW87PairvKm3vCeV1URNOIsMmQimJobi1+D8azJi7ATrsw9zk2yQq2bzMv0kVK0PPggf3tA=="
						crossOrigin="anonymous"
						referrerPolicy="no-referrer"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<div data-o-component="o-cookie-message"></div>
				</body>
			</Html>
		);
	}
}
