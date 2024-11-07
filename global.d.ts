export {};

interface Umami {
	track: (name: string) => void;
}

declare global {
	interface Window {
		fbq: (a: string, b: string, c?: any) => void;

		umami: Umami;
	}
}
