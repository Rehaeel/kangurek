import { Offer } from './types';

const imgFolderPrefix: string = '/images/pages/home/offer/';

export const offerList: Offer[] = [
	{
		href: '/integracja-sensoryczna',
		image: imgFolderPrefix + 'Kafelek_integracja_sensoryczna.jpg',
		description: (
			<>
				Na zajęciach <b>SI</b> poprzez specjalnie dobrane ćwiczenia
				wpływamy na właściwy odbiór wrażeń sensorycznych, które
				warunkują prawidłowy przebieg procesu Integracji Sensorycznej.
			</>
		),
	},
	{
		href: '/sensomotoryczna-terapia-widzenia',
		image: imgFolderPrefix + 'Sensomotoryczna-Terapia-Widzenia.jpg',
		description: (
			<>
				Na zajęciach <b>STW</b> ćwiczymy funkcje wzrokowe podczas ruchu
				i w statyce, następuje właściwa integracja bodźców wzrokowych z
				pozostałymi zmysłami.
			</>
		),
	},
	{
		href: '/rehabilitacja-ruchowa',
		image: imgFolderPrefix + 'Rehabilitacja-Ruchowa.jpg',
		description: (
			<>
				<b>Rehabilitacja ruchowa</b> rozwija prawidłową postawę dzieci
				wymagających gimnastyki korekcyjnej, wspiera rozwój ruchowy i
				sprawność fizyczną dzieci z różnymi dysfunkacjami.
			</>
		),
	},
	{
		href: '/terapia-pedagogiczna',
		image: imgFolderPrefix + 'Terapia-Pedagogiczna.jpg',
		description: (
			<>
				Na zajęciach <b>terapii pedagogicznej</b> pomagamy przezwyciężać
				trudności szkolne związane z czytaniem, pisaniem i liczeniem
				poprzez specjalne metody.
			</>
		),
	},
	{
		href: '/terapia-logopedyczna',
		image: imgFolderPrefix + 'Logopedia.jpg',
		description: (
			<>
				Na <b>logopedii</b> usuwamy wady wymowy. Wprowadzamy także
				komunikację wspomagającą i alternatywną (AAC), która uczy
				porozumiewania się dzieci niemówiących.
			</>
		),
	},
	{
		href: '/terapia-reki',
		image: imgFolderPrefix + 'Terapia-Reki.jpg',
		description: (
			<>
				<b>Terapia ręki</b> to zajęcia prowadzone specjalnymi metodami w
				celu poprawy pisania, usprawniania ruchów precyzyjnych,
				dostarczanie wrażeń czuciowych.
			</>
		),
	},
	{
		href: '/kreatywnosc',
		image: imgFolderPrefix + 'Kreatywnosc.jpg',
		description: (
			<>
				Na zajęciach <b>kreatywności</b> rozwijamy wyobraźnię, twórcze
				myślenie, zainteresowanie sztuką.
			</>
		),
	},
	{
		href: '/kynoterapia',
		image: imgFolderPrefix + 'Kynoterapia.jpg',
		description: (
			<>
				Podczas zajęć <b>kynoterapii</b> ze specjalnie szkolonymi psami
				dzieci wyciszają się, poprawiają koncentrację uwagi i
				wszechstronnie rozwijają się.
			</>
		),
	},
];
