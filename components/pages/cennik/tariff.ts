import { Tariff } from './types';

export const tariff: Tariff[] = [
	{
		header: 'Integracja Sensoryczna',
		body: [
			{
				serviceName: 'Diagnoza zaburzeń',
				duration: '2-3 spotkania',
				cost: '550 zł',
			},
			{
				serviceName: 'Terapia',
				duration: '45 min.',
				cost: '120 zł',
			},
		],
	},
	{
		header: 'Neurologopedia',
		body: [
			{
				serviceName: 'Diagnoza',
				duration: '1 spotkanie',
				cost: '150 zł',
			},
			{
				serviceName: 'Terapia',
				duration: '45 min',
				cost: '120 zł',
			},
			{
				serviceName: 'Terapia',
				duration: '30 min',
				cost: '100 zł',
			},
		],
	},
	{
		header: 'Terapia Pedagogiczna',
		body: [
			{
				serviceName: 'Indywidualna',
				duration: '45 min',
				cost: '110 zł',
			},
			{
				serviceName: 'Grupowa',
				duration: '45 min',
				cost: '60 zł',
			},
		],
	},
	{
		header: 'Terapia Ręki',
		body: [
			{
				serviceName: 'Diagnoza',
				duration: '2 spotkania',
				cost: '400 zł',
			},
			{
				serviceName: 'Terapia',
				duration: '45 min',
				cost: '120 zł',
			},
		],
	},
	{
		header: 'Rehabilitacja ruchowa',
		body: [
			{
				serviceName: 'Indywidualna',
				duration: '45 min',
				cost: '110 zł',
			},
		],
	},
	{
		header: 'Zajęcia z psem',
		body: [
			{
				serviceName: 'Indywidualne',
				duration: '45 min',
				cost: '100 zł',
			},
			{
				serviceName: 'Grupowe',
				duration: '45 min',
				cost: '60 zł',
			},
		],
	},
	{
		header: 'Dodatkowe usługi',
		body: [
			{
				serviceName: 'Konsultacja',
				duration: '1 spotkanie',
				cost: '200 zł',
			},
			{
				serviceName: 'Wydawanie dodatkowych opinii',
				duration: '-',
				cost: '150 zł',
			},
			{
				serviceName: 'Praktyka z integracji sensorycznej',
				duration: '2 miesiące',
				cost: '1200 zł',
			},
		],
	},
];
