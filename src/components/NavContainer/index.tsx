import React from 'react'
import Modal from '@/components/Modal'
import VisibilityManager from '@/components/VisibilityManager'
import { MdOutlineNavigateBefore, MdNavigateNext } from 'react-icons/md'
import useWindowResize from '@/hooks/useWidowResize'
import styles from './navContainer.module.scss'

import type { ReactElement, PropsWithChildren } from 'react'
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

	const goToPrevPage = () => setSelected((selected) => (selected > 0 ? selected - 1 : 0))
	const gotoNextPage = () =>
		setSelected((selected) => (selected < maxChildrens ? selected + 1 : maxChildrens))

	type touchAndDragType = React.TouchEvent<HTMLElement> & React.DragEvent<HTMLButtonElement>

	const touchAndDrag = (event: touchAndDragType) => {
		const screenXposition = event.clientX ?? event.changedTouches[0].clientX
		const isLeft = screenXposition < width / 2
		return isLeft ? goToPrevPage() : gotoNextPage()
	}

	const Content = (): ReactElement => {
		return (
			<React.Fragment>
				<VisibilityManager hideOnMobile hideOnTablet>
					<div className={styles.navControls}>
						<MdOutlineNavigateBefore className={disabled} size={35} onClick={goToPrevPage} />

						<MdNavigateNext className={disabled2} size={35} color="white" onClick={gotoNextPage} />
					</div>
				</VisibilityManager>
				<nav draggable className={styles.nav} onDragStart={touchAndDrag} onTouchEnd={touchAndDrag}>
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
export default NavContainer
