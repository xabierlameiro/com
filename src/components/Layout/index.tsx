import type { ReactElement } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Image from 'next/image'

type Props = {
	children: ReactElement
	meta?: {
		title: string
	}
}

export default function Layout({ children, meta }: Props) {
	return (
		<>
			<Head>
				<title>{meta?.title ?? 'Dont have meta title'}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Image
				src="/background.jpg"
				blurDataURL="/background.jpg"
				alt="Picture of the author"
				layout="fill"
				objectFit="cover"
				style={{ zIndex: 0 }}
				objectPosition="right"
				placeholder="blur"
			/>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	)
}
