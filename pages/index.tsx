import type { ReactElement } from 'react'
import Layout from '@/layout'

const HomePage = (): ReactElement => {
	return <h1>Hello JSX</h1>
}

HomePage.getLayout = function getLayout(page: ReactElement, meta: any) {
	return <Layout meta={meta}>{page}</Layout>
}

export default HomePage
