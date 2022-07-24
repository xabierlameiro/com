import { components as Components } from '@/components/MDX'
import { render, screen } from '@/test'

describe('Layout component', () => {
	it('should render the article mdx article', () => {
		render(<Components.Article>This is my article</Components.Article>)
		expect(screen.getByTestId('article')).toBeInTheDocument()
	})

	it('should render the article mdx component', () => {
		render(<Components.Container>This is my container</Components.Container>)
		expect(screen.getByTestId('section-container')).toBeInTheDocument()
	})

	it('should render the navContainer mdx component', () => {
		render(
			<Components.NavContainer>
				<h1>Children</h1>
			</Components.NavContainer>
		)
	})

	it('should render the header mdx component', () => {
		render(<Components.Header>Hello world</Components.Header>)
		render(<Components.Header.H1>H1</Components.Header.H1>)
		expect(screen.getByTestId('h1')).toBeInTheDocument()
		render(<Components.Header.H2>H2</Components.Header.H2>)
		expect(screen.getByTestId('h2')).toBeInTheDocument()
		render(<Components.Header.H3>H3</Components.Header.H3>)
		expect(screen.getByTestId('h3')).toBeInTheDocument()
		render(<Components.Header.H4>H4</Components.Header.H4>)
		expect(screen.getByTestId('h4')).toBeInTheDocument()
	})
})
