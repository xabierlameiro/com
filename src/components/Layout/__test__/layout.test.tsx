import Layout from '@/components/Layout'
import { render, screen } from '@/test'

describe('Layout component', () => {
	it('should render the header', () => {
		render(
			<Layout>
				<div>children here</div>
			</Layout>
		)
		expect(screen.getByTestId('header')).toBeInTheDocument()
	})
	it('should render main and footer', () => {
		render(
			<Layout meta={{ title: 'My title' }}>
				<div>children here</div>
			</Layout>
		)
		expect(screen.getByTestId('main')).toBeInTheDocument()
		expect(screen.getByTestId('footer')).toBeInTheDocument()
	})
})
