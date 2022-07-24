import type { PropsWithChildren } from 'react'
import styles from './headers.module.scss'

const Header = ({ children }: PropsWithChildren) => children as JSX.Element

Header.H1 = (props: PropsWithChildren): JSX.Element => (
	<h1 data-testid="h1" className={styles.h1}>
		{props.children}
	</h1>
)

Header.H2 = (props: PropsWithChildren) => (
	<h2 data-testid="h2" className={styles.h2}>
		{props.children}
	</h2>
)

Header.H3 = (props: PropsWithChildren) => (
	<h3 data-testid="h3" className={styles.h3}>
		{props.children}
	</h3>
)

Header.H4 = (props: PropsWithChildren) => (
	<h4 data-testid="h4" className={styles.h4}>
		{props.children}
	</h4>
)

export default Header
