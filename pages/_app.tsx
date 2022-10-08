import '../styles/globals.css';
import '@fontsource/lora';
import '@fontsource/lato';
import type { AppProps } from 'next/app';
import Layer from '../components/layer';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
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

			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_API}`}
			/>

			<Script strategy='lazyOnload' id='ga-dataLayer'>
				{`
					  window.dataLayer = window.dataLayer || [];
					  function gtag(){dataLayer.push(arguments);}
					  gtag('js', new Date());
					  gtag('config', '${process.env.GOOGLE_API}');
					  
				`}
			</Script>

			<Component {...pageProps} />
		</Layer>
	);
}

export default MyApp;
