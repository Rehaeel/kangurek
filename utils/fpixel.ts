export const pageview = () => {
	window.fbq('track', 'PageView');
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const fbEvent = (name: string, options: Record<string, any> = {}) => {
	window.fbq('track', name, options);
};
