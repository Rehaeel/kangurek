import "../styles/globals.css";
import "@fontsource/lora";
import "@fontsource/lato";
import type { AppProps } from "next/app";
import Layer from "../components/layer";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

declare global {
    interface Window {
        fbq: (a:any, b:any, c?: any) => void;
    }
}

function MyApp({ Component, pageProps }: AppProps) {

    useEffect(()=> {
      // @ts-ignore
      (function(f:any,b:any,e:any,v:any,n:any,t:any,s:any) {
        if(f.fbq)return;
        n = f.fbq = function(){
          n.callMethod ?
            n.callMethod.apply(n,arguments) : n.queue.push(arguments)
        };

        if(!f._fbq) f._fbq=n;

        n.push=n;
        n.loaded=!0;
        n.version='2.0';
        n.queue=[];
        t = b.createElement(e);
        t.async=!0;
        t.src=v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      })(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');

      window.fbq('init', `${process.env.NEXT_PUBLIC_FACEBOOK_API}`);
      window.fbq('track', 'PageView');
      console.log(process.env.NEXT_PUBLIC_FACEBOOK_API);
    },[])

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
