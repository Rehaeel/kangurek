import { Tariff } from './types';

export const tariff: Tariff[] = [
	{
		header: 'INTEGRACJA SENSORYCZNA',
		body: [
			{
				serviceName: 'DIAGNOZA ZABURZEŃ INTEGRACJI SENSORYCZNEJ',
				duration: '3 spotkania',
				cost: '600 zł',
			},
			{
				serviceName: 'TERAPIA INTEGRACJI SENSORYCZNEJ',
				duration: '45 min.',
				cost: '130 zł',
			},
			{
				serviceName: 'DIAGNOZA TERAPII RĘKI',
				duration: '2 spotkania',
				cost: '450 zł',
			},
			{
				serviceName: 'TERAPIA RĘKI',
				duration: '45 min.',
				cost: '130 zł',
			},
		],
	},
	{
		header: 'LOGOPEDIA',
		body: [
			{
				serviceName: 'DIAGNOZA NEUROLOGOPEDYCZNA',
				duration: '1 spotkanie',
				cost: '150 zł',
			},
			{
				serviceName: 'TERAPIA NEUROLOGOPEDYCZNA',
				duration: '45 min.',
				cost: '130 zł',
			},
			{
				serviceName: 'TERAPIA NEUROLOGOPEDYCZNA',
				duration: '30 min.',
				cost: '100 zł',
			},
			{
				serviceName: 'TERAPIA LOGOPEDYCZNA',
				duration: '45 min.',
				cost: '120 zł',
			},
		],
	},
	{
		header: 'TERAPIA PEDAGOGICZNA',
		body: [
			{
				serviceName: 'TERAPIA PEDAGOGICZNA- indywidualna',
				duration: '45 min.',
				cost: '130 zł',
			},
			{
				serviceName: 'EMOCYJKA',
				duration: '45 min.',
				cost: '130 zł',
			},
			{
				serviceName: 'TUS TRENING UMIEJETNOŚCI SPOŁECZNYCH - grupowo',
				duration: '45 min.',
				cost: '80 zł',
			},
			{
				serviceName: 'TUS indywidualnie',
				duration: '45 min.',
				cost: '130 zł',
			},
			{
				serviceName: '-grupowa',
				duration: '45 mim.',
				cost: '60 zł',
			},
		],
	},
	{
		header: 'PSYCHOLOGIA',
		body: [
			{
				serviceName: 'TERAPIA PSYCHOLOGICZNA',
				duration: '45 min.',
				cost: '130 zł',
			},
		],
	},
	{
		header: 'ZAJĘCIA Z PSEM',
		body: [
			{
				serviceName: 'ZAJĘCIA Z PSEM - indywidualne',
				duration: '45 min.',
				cost: '130 ZŁ',
			},
			{
				serviceName: '- grupowe',
				duration: '45 min.',
				cost: '60 ZŁ',
			},
		],
	},
	{
		header: 'DODATKOWE USŁUGI',
		body: [
			{
				serviceName: 'KONSULTACJA',
				duration: '1 spotkanie',
				cost: '250 zł',
			},
			{
				serviceName: 'WYDAWANIE DODATKOWYCH OPINII',
				duration: '-',
				cost: '150 zł',
			},
		],
	},
];
