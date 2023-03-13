import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import favicon from 'public/favicon.ico';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
