import React from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode, PropsWithChildren } from 'react'
import { MdOutlineNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { MDXProvider } from '@mdx-js/react'
import Modal from '@/components/Modal'
import VisibilityManager from '@/components/VisibilityManager'
import './global.scss'
import './reset.scss'
import styles from './test.module.scss'
import useWindowResize from '@/hooks/useWidowResize'

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
	const { width } = useWindowResize()
	const [open, setOpen] = React.useState(false)
	const [selected, setSelected] = React.useState(indexByDefault)
	const maxChildrens = React.Children.count(children) - 1
	const disabled = selected > indexByDefault ? styles.enabled : styles.disabled
	const disabled2 = selected < maxChildrens ? styles.enabled : styles.disabled

	const onDrag = (e: React.DragEvent<HTMLDivElement>): void => {
		e.stopPropagation()
		const { clientX } = e
		const isLeft = clientX < width / 2
		if (isLeft) {
			setSelected(selected - 1)
		} else {
			setSelected(selected + 1)
		}
	}

	const Content = (): ReactElement => {
		return (
			<React.Fragment>
				<VisibilityManager hideOnMobile hideOnTablet>
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
				</VisibilityManager>
				<nav className={styles.nav} draggable="true" onDragStart={onDrag}>
					{React.Children.map(children, (child, index) => (index === selected ? child : null))}
				</nav>
			</React.Fragment>
		)
	}

	return (
		<React.Fragment>
			<VisibilityManager hideOnDesktop>
				<Modal isOpen={open} onClose={() => setOpen(false)}>
					<Content />
				</Modal>
				<button onClick={() => setOpen((open) => !open)}>SETOPEN</button>
			</VisibilityManager>
			<VisibilityManager hideOnMobile hideOnTablet>
				<Content />
			</VisibilityManager>
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
