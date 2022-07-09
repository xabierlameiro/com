import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Layout from '@/layout'

const AllTheProviders = ({ children }) => {
	return <>{children}</>
}
const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

const renderWithLayout = (ui, options) =>
	render(ui, { wrapper: ({ children }) => <Layout>{children}</Layout>, ...options })

export * from '@testing-library/react'
export { customRender as render, renderWithLayout }
