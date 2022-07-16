import { render, screen } from '@/test'
import VisibilityManager from '@/components/VisibilityManager'

describe.skip('VisibilityManager component', () => {
	it('should render children in mobile screen', () => {
		render(
			<VisibilityManager>
				<div>Children</div>
			</VisibilityManager>
		)
		//TODO
	})
})
