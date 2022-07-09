import type { ReactElement } from 'react'
import styles from './main.module.scss'

type Props = {
	children: ReactElement
}
const Main = ({ children }: Props) => (
	<main className={styles.main} data-testid="main">
		{children}
	</main>
)

export default Main
