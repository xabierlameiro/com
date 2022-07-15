import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}
	render() {
		// TODO: data-theme posiblemente hay que moverlo por que no se podrá llegar a este
		// nivel con el provider de contexto
		return (
			<Html data-theme="light">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation&family=Lato:wght@300&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<div id="dialog" />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
