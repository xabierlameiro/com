import Link from 'next/link'

export default function Nav() {
	return (
		<ul>
			<li>
				<Link href="/test/">Test</Link>
			</li>
			<li>
				<Link href="/">Home</Link>
			</li>
		</ul>
	)
}
