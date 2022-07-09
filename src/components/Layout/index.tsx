import type { ReactElement } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import React from 'react'

type Props = {
	children: ReactElement
}

export default function Layout({ children }: Props) {
	return (
		<React.Fragment>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</React.Fragment>
	)
}
