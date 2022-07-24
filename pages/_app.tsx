import React from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { components } from '@/components/MDX'
import './global.scss'
import './reset.scss'

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page)
	return getLayout(
		<MDXProvider components={components}>
			<Component {...pageProps} />
		</MDXProvider>
	)
}
