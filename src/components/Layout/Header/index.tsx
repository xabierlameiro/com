import Nav from './Nav'
import styles from './header.module.scss'

const Header = () => (
	<header className={styles.header} data-testid="header">
		<Nav />
	</header>
)

export default Header
