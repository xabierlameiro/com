import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/layout'

const HomePage: NextPageWithLayout = () => {
	return <h1>Hello JSX</h1>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default HomePage
