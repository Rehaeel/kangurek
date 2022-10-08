import { Tariff } from './types';

export const tariff: Array<Tariff> = [
	{
		header: 'Integracja Sensoryczna',
		body: [
			{
				serviceName: 'Diagnoza zaburzeń integracji sensorycznej',
				duration: '2-3 spotkania',
				cost: '400 zł',
			},
			{
				serviceName: 'Terapia integracji sensorycznej',
				duration: '45 min.',
				cost: '90 zł',
			},
		],
	},
	{
		header: 'SENSOMOTORYCZNA TERAPIA WIDZENIA (STW)',
		body: [
			{
				serviceName: 'Diagnoza STW',
				duration: '1 spotkanie',
				cost: '200 zł',
			},
			{
				serviceName: 'SENSOMOTORYCZNA TERAPIA WIDZENIA (STW)',
				duration: '45 min.',
				cost: '80 zł',
			},
		],
	},
	{
		header: 'KREATYWNOŚĆ',
		body: [
			{
				serviceName: 'Zajęcia grupowe',
				duration: '45 min.',
				cost: '40 zł',
			},
		],
	},
	{
		header: 'KYNOTERAPIA (DOGOTERAPIA)',
		body: [
			{
				serviceName: 'Zajęcia indywidualne z psem',
				duration: '45 min.',
				cost: '80 zł',
			},
		],
	},
	{
		header: 'TERAPIA PEDAGOGICZNA',
		body: [
			{
				serviceName:
					'Zajęcia z terapii pedagogicznej lub behawioralnej ',
				duration: '45 min.',
				cost: '80 zł',
			},
		],
	},
	{
		header: 'TERAPIA TĘKI',
		body: [
			{
				serviceName: 'Diagnoza',
				duration: '1-2 spotkania',
				cost: '300 zł',
			},
			{
				serviceName: 'Terapia ręki - zajęcia indywidualne ',
				duration: '45 min.',
				cost: '90 zł',
			},
		],
	},
	{
		header: 'TERAPIA LOGOPEDYCZNA',
		body: [
			{
				serviceName: 'Diagnoza',
				duration: '1 spotkanie',
				cost: '120 zł',
			},
			{
				serviceName: 'Terapia logopedyczna',
				duration: '45 min.',
				cost: '80 zł',
			},
			{
				serviceName:
					'Wystawianie zaświadczeń na studia o braku przeciwskazań do wykonywania zawodu nauczyciela/logopedy',
				duration: '1 spotkanie',
				cost: '100 zł',
			},
		],
	},
	{
		header: 'REHABILITACJA RUCHOWA',
		body: [
			{
				serviceName: 'Rehabilitacja ruchowa indywidualna',
				duration: '45 min.',
				cost: '80 zł',
			},
		],
	},
	{
		header: 'DODATKOWE USŁUGI',
		body: [
			{
				serviceName: 'Wydawanie dodatkowych opinii',
				duration: '-',
				cost: '80 zł',
			},
			{
				serviceName: 'Konsultacje',
				duration: '1 spotkanie',
				cost: '150 zł',
			},
			{
				serviceName: 'Praktyka z integracji sensorycznej',
				duration: '1 miesiąc',
				cost: '800 zł',
			},
		],
	},
];
