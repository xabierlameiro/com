/** @type {import('next').NextConfig} */

const nextConfig = {
	rewrites: async () => {
		return [
			{
				source: '/:coverage',
				destination: '/:coverage/index.html',
			},
		]
	},
	reactStrictMode: true,
	experimental: { esmExternals: true },
	eslint: {
		dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
	pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
	webpack: function (config) {
		config.module.rules.push({
			test: /\.mdx?$/,
			use: [
				{
					loader: '@mdx-js/loader',
					options: {
						rehypePlugins: [],
						remarkPlugins: [],
						providerImportSource: '@mdx-js/react',
					},
				},
			],
		})
		return config
	},
}
module.exports = nextConfig
