import React from 'react'
import type { ReactElement, ReactNode, PropsWithChildren } from 'react'
import { MDXProvider } from '@mdx-js/react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import './global.scss'
import styles from './test.module.scss'
export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const Article = (props: PropsWithChildren) => (
	<article className={styles.article}>{props.children}</article>
)
const Container = (props: PropsWithChildren) => (
	<section className={styles.section}>{props.children}</section>
)
type Props = PropsWithChildren & {
	indexByDefault: number
}
const NavContainer = ({ children, indexByDefault = 0 }: Props) => {
	const [selected, setSelected] = React.useState(indexByDefault)
	const maxChildrens = React.Children.count(children) - 1

	return (
		<React.Fragment>
			{selected > indexByDefault && (
				<button onClick={() => setSelected((selected) => selected - 1)}>prev</button>
			)}
			{selected < maxChildrens && (
				<button onClick={() => setSelected((selected) => selected + 1)}>next</button>
			)}
			<nav className={styles.nav}>
				{React.Children.map(children, (child, index) => (index === selected ? child : null))}
			</nav>
		</React.Fragment>
	)
}

const components = {
	Article: Article,
	Container: Container,
	NavContainer: NavContainer,
	h1: (props: PropsWithChildren) => <h1 className={styles.h1}>{props.children}</h1>,
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page)
	return getLayout(
		<MDXProvider components={components}>
			<Component {...pageProps} />
		</MDXProvider>
	)
}
