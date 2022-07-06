import OfferWrapper from '../components/universal/offer-wrapper';
import Image from 'next/image';
import { NextPage } from 'next';
import Head from 'next/head';

const KynoterapiaPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Kynoterapia (dogoterapia)</title>
				<meta
					name='description'
					content='Kynoterapia, inaczej dogoterapia, jest to metoda, wspierająca wszechstronny rozwój dziecka przy wykorzystaniu specjalnie szkolonego psa. Poprzez np.: głaskanie, karmienie, naśladowanie zachowań zwierzaka, prowadzenie go na smyczy, wydawanie komend i wspólnej zabawy osiągamy zamierzone, terapeutyczne cele.'
				/>
				<meta
					name='keywords'
					content='dogoterapia, kynoterapia, integracja sensoryczna, centrum-kangurek'
				/>
			</Head>

			<OfferWrapper
				title='Kynoterapia'
				image='/images/pages/kynoterapia/Dogoterapia_zakladka_kangurek.jpg'>
				<div className='sm:gap-700 grid grid-cols-1 items-center gap-4 lg:grid-cols-2'>
					<div className='flex flex-col gap-5 lg:gap-7'>
						<b className='underline'>Kynoterapia (dogoterapia),</b>

						<p>
							jest to metoda, wspierająca wszechstronny rozwój
							dziecka przy wykorzystaniu specjalnie szkolonego
							psa.
						</p>
						<p>
							Poprzez np.: głaskanie, karmienie, naśladowanie
							zachowań zwierzaka, prowadzenie go na smyczy,
							wydawanie komend i wspólnej zabawy osiągamy
							zamierzone, terapeutyczne cele takie jak:
						</p>
						<ul className='flex list-inside list-disc flex-col  gap-1 pl-0 sm:pl-5 lg:gap-2'>
							<li>
								empatię do zwierząt, opiekuńczość,
								odpowiedzialność
							</li>
							<li>wyciszenie zachowań agresywnych</li>
							<li>poprawę koncentracji uwagi dziecka</li>
							<li>
								rozładowanie napięcia emocjonalnego, panowanie
								nad emocjami
							</li>
							<li>eliminowanie lęków</li>
							<li>uczenie odpowiedzialności, akceptacji.</li>
							<li>usprawnianie motoryki dużej i małej</li>
							<li>stymulację wszystkich zmysłów</li>
							<li>
								zmniejszają nadwrażliwość na bodźce dotykowe
							</li>
							<li>zwiększenie poczucia bezpieczeństwa</li>
							<li>
								wyzwalają potrzebę spontanicznej komunikacji,
								ułatwiają nawiązywanie kontaktu z innymi
							</li>
						</ul>
					</div>
					<div className='flex flex-col gap-5 lg:gap-7'>
						<Image
							src='/images/pages/kynoterapia/Dogoterapia.jpg'
							alt='kynoterapia (dogoterapia)'
							objectFit='contain'
							width={350}
							height={260}
						/>
						<div className='flex flex-col gap-3 lg:gap-5'>
							<p>Zajęcia obejmują trzy formy pracy z psem:</p>
							<ol className='flex list-inside list-decimal flex-col gap-1 pl-0 sm:pl-5 lg:gap-2'>
								<li>spotkanie z psem</li>
								<li>edukacja z psem</li>
								<li>terapia z psem</li>
							</ol>
						</div>
					</div>
				</div>
			</OfferWrapper>
		</>
	);
};

export default KynoterapiaPage;
