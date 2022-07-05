import { StaticImageData } from 'next/image';

export interface Terapeuta {
	name: string;
	image: StaticImageData;
	education: string[];
	experience: string | JSX.Element;
}
