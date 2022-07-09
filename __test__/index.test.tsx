import { renderWithLayout, screen } from '../jest.setup'
import HomePage from '../pages/index'

describe('Home page', () => {
	it('should render the correct sections', () => {
		renderWithLayout(<HomePage />)
		expect(screen.getByTestId('header')).toBeInTheDocument()
		expect(screen.getByTestId('main')).toBeInTheDocument()
		expect(screen.getByTestId('footer')).toBeInTheDocument()
	})
})
