import React from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode, PropsWithChildren } from 'react'
import { MdOutlineNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { MDXProvider } from '@mdx-js/react'
import Modal from '@/components/Modal'
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
	const [open, setOpen] = React.useState(false)
	const [selected, setSelected] = React.useState(indexByDefault)
	const maxChildrens = React.Children.count(children) - 1
	const disabled = selected > indexByDefault ? styles.enabled : styles.disabled
	const disabled2 = selected < maxChildrens ? styles.enabled : styles.disabled

	return (
		<React.Fragment>
			<Modal isOpen={open} onClose={() => setOpen(false)}>
				<h1>juan</h1>
			</Modal>
			<button onClick={() => setOpen((open) => !open)}>SETOPEN</button>
			<div className={styles.navControls}>
				<MdOutlineNavigateBefore
					className={disabled}
					size={35}
					onClick={() => setSelected((selected) => selected - 1)}
				/>

				<MdNavigateNext
					className={disabled2}
					size={35}
					color="white"
					onClick={() => setSelected((selected) => selected + 1)}
				/>
			</div>
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
