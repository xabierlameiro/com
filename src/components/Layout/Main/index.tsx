import type { ReactElement } from 'react'

type Props = {
	children: ReactElement
}
const Main = ({ children }: Props) => <main data-testid="main">{children}</main>

export default Main
