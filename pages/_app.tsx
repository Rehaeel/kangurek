import '../styles/globals.css';
import '@fontsource/lora';
import '@fontsource/lato';
import type { AppProps } from 'next/app';
import Layer from '../components/layer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layer>
			<Head>
				<link rel='shortcut icon' href='/images/logo.svg' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'></meta>
			</Head>
			<Component {...pageProps} />
		</Layer>
	);
}

export default MyApp;
