interface TarriffBody {
	serviceName: string;
	duration: string;
	cost: string;
}

export interface Tariff {
	header: string;
	body: Array<TarriffBody>;
}
