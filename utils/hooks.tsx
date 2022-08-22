import { useEffect, useState } from 'react';
import { WindowSize } from './types';
import ReactGA from 'react-ga';

////////////////////////////////////////////////////////////////////////////////////////////////////////
export const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowSize;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
export const useInitializeGoogleAnalytics = () => {
	useEffect(() => {
		if (process.env.GOOGLE_ANALYTICS_KEY)
			ReactGA.initialize(process.env.GOOGLE_ANALYTICS_KEY);
	}, []);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
export const useGetGoogleAnalyticsPath = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname);
	}, []);
};
