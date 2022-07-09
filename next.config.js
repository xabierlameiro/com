/** @type {import('next').NextConfig} */
const nextConfig = {
	styledComponents: true,
	reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
}

module.exports = nextConfig
