import type { PropsWithChildren } from 'react'
import styles from './container.module.scss'

const Container = (props: PropsWithChildren) => (
	<section data-testid="section-container" className={styles.section}>
		{props.children}
	</section>
)

export default Container
