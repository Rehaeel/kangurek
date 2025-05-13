export {};

declare global {
	interface Window {
		fbq: (a: string, b: string, c?: any) => void;
	}
}
