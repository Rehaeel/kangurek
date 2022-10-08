export interface Terapeuta {
	name: string;
	image: string;
	education: string[];
	experience: string[];
}

export interface TerapeuciProps {
	terapeuci: Terapeuta[];
}
