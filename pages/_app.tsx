import '../styles/globals.css';
import '@fontsource/lora';
import '@fontsource/lato';
import type { AppProps } from 'next/app';
import Layer from '../components/layer';
import Head from 'next/head';
import { useInitializeGoogleAnalytics } from '../utils/hooks';

function MyApp({ Component, pageProps }: AppProps) {
	useInitializeGoogleAnalytics();

	return (
		<Layer>
			<Head>
				<link rel='shortcut icon' href='/images/logo.svg' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta name='author' content='Rafał Prokopiak' />
				<meta
					property='og:image'
					content='https://kangurek2.vercel.app/images/logo.png'
				/>
				<meta property='og:type' content='company' />
			</Head>
			<Component {...pageProps} />
		</Layer>
	);
}

export default MyApp;
