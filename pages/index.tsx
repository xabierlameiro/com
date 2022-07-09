import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import styled from 'styled-components'
import Layout from '@/layout'

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
