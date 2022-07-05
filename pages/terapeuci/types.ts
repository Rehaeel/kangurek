import { StaticImageData } from 'next/image';

export interface Terapeuta {
	name: string;
	image: StaticImageData | string;
	education: Array<string>;
	experience: JSX.Element;
}

export interface TerapeuciProps {
	terapeuci: Terapeuta[];
}
