import '../styles/globals.css';
import '@fontsource/lora';
import '@fontsource/lato';
import type { AppProps } from 'next/app';
import Layer from '../components/layer';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from '../utils/fpixel';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		pageview();

		const handleRouteChange = () => pageview();

		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

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
				
				{/* Preload critical resources */}
				<link
					rel="preload"
					href="/images/home.png"
					as="image"
					type="image/png"
					fetchPriority="high"
				/>
				<link
					rel="preload"
					href="/images/logo.svg"
					as="image"
					type="image/svg+xml"
					fetchPriority="high"
				/>
			</Head>

			<Script
				id='fb-pixel'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_ID});
          `,
				}}
			/>

			<Script
				defer
				src='https://analytics.organise.dad/script.js'
				data-website-id='d641dd90-2c0b-46e4-a0c8-ed20432484e0'
			/>

			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_API}`}
			/>

			<Script strategy='lazyOnload' id='ga-dataLayer'>
				{`
					  window.dataLayer = window.dataLayer || [];
					  function gtag(){dataLayer.push(arguments);}
					  gtag('js', new Date());
					  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_API}');
					  
				`}
			</Script>

			<Component {...pageProps} />
		</Layer>
	);
}

export default MyApp;
