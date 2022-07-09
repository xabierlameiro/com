import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from './components/Layout'
import styled from 'styled-components'

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`

const HomePage: NextPageWithLayout = () => {
	return <Title>main</Title>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default HomePage
