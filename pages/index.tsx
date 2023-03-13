import Head from 'next/head';
import LandingPage from '@/components/ui/LandingPage/LandingPage';

export default function Home() {
	return (
		<>
			<Head>
				<title>Wonder Arena</title>
				<meta
					name="description"
					content="Wonder Arena is an on-chain auto battler game built on the Flow blockchain that offers a unique and exciting gaming experience."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<LandingPage />
		</>
	);
}
