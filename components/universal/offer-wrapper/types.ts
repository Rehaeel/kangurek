import { StaticImageData } from 'next/image';

export interface Props {
	children: JSX.Element | Array<JSX.Element | boolean | string>;
	title: string;
	image: StaticImageData;
}
