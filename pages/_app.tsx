import '../styles/globals.css';
import '@fontsource/lora';
import '@fontsource/lato';
import type { AppProps } from 'next/app';
import Layer from '../components/layer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layer>
			<Component {...pageProps} />
		</Layer>
	);
}

export default MyApp;
