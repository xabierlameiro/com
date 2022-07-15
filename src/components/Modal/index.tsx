import React from 'react'
import type { ReactElement } from 'react'
import { createPortal } from 'react-dom'
import { IoMdClose } from 'react-icons/io'
import styles from './modal.module.scss'

type ModalProps = {
	children: ReactElement
	isOpen: boolean
	onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: ModalProps): ReactElement | null => {
	const [isCSR, setIsCSR] = React.useState(false)

	React.useEffect(() => {
		setIsCSR(true)
	}, [])

	return isCSR
		? createPortal(
				<dialog data-testid="dialog" className={styles.dialog} open={isOpen}>
					<IoMdClose onClick={onClose} />
					{children}
				</dialog>,
				document.getElementById('dialog') as Element
		  )
		: null
}

export default Modal
