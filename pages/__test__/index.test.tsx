import { renderWithLayout, render, screen } from '../../jest.setup'
import HomePage from '../index'

describe('Home page', () => {
	it('should render the correct sections', () => {
		renderWithLayout(<HomePage />)
		expect(screen.getByTestId('header')).toBeInTheDocument()
		expect(screen.getByTestId('main')).toBeInTheDocument()
		expect(screen.getByTestId('footer')).toBeInTheDocument()
	})

	it('should returns the page with Layout', () => {
		render(HomePage.getLayout(<div>HomePage</div>, { title: 'Homepage' }))
		expect(screen.getByTestId('header')).toBeInTheDocument()
		expect(screen.getByTestId('main')).toBeInTheDocument()
		expect(screen.getByTestId('footer')).toBeInTheDocument()
	})
})
