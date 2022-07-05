import { StaticImageData } from 'next/image';

export interface Props {
	title?: string;
	image?: StaticImageData | undefined;
	children: JSX.Element | JSX.Element[];
}
