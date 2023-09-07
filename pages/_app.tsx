import "../styles/globals.css";
import "@fontsource/lora";
import "@fontsource/lato";
import type { AppProps } from "next/app";
import Layer from "../components/layer";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layer>
      <Head>
        <link rel="shortcut icon" href="/images/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Rafał Prokopiak" />
        <meta
          property="og:image"
          content="https://kangurek2.vercel.app/images/logo.png"
        />
        <meta property="og:type" content="company" />

          <!-- Meta Pixel Code -->
          <script>
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '617685440434672');
              fbq('track', 'PageView');
          </script>
          <noscript><img height="1" width="1" style="display:none"
                         src="https://www.facebook.com/tr?id=617685440434672&ev=PageView&noscript=1"
          /></noscript>
          <!-- End Meta Pixel Code -->
      </Head>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_API}`}
      />

      <Script strategy="lazyOnload" id="ga-dataLayer">
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
