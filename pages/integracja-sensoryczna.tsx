import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import OfferWrapper from '../components/universal/offer-wrapper';
import SI from '../public/images/pages/integracja-sensoryczna/Integracja_Sensoryczna_zakladka_kangurek.jpg';
import photo from '../public/images/pages/integracja-sensoryczna/SI.jpg';

const IntegracjaSensorycznaPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Integracja Sensoryczna</title>
				<meta
					name='description'
					content='Zakłócenia na poziomie organizacji i odbioru wrażeń zmysłowych mogą skutkować nieadekwatnym zachowaniem dziecka, trudnościami w uczeniu się, a także powodować zaburzenia funkcji ruchowych. Interweniujemy terapeutycznie wtedy, gdy luka między tym, czego by się oczekiwało od dziecka na danym etapie wiekowym w zakresie SI a tym, co ono prezentuje jest na tyle duża, że dziecku nie udaje się go wyrównać w trakcie zabaw i innych czynności naturalnych.'
				/>
				<meta
					name='keywords'
					content='integracja sensoryczna, si, centrum-kangurek'
				/>
			</Head>

			<OfferWrapper title='Integracja Sensoryczna (SI)' image={SI}>
				<b className='font-black underline'>
					Integracja sensoryczna (SI)
				</b>

				<p>
					Zakłócenia na poziomie organizacji i odbioru wrażeń
					zmysłowych mogą skutkować nieadekwatnym zachowaniem dziecka,
					trudnościami w uczeniu się, a także powodować zaburzenia
					funkcji ruchowych.
				</p>
				<p>
					Interweniujemy terapeutycznie wtedy, gdy luka między tym,
					czego by się oczekiwało od dziecka na danym etapie wiekowym
					w zakresie SI a tym, co ono prezentuje jest na tyle duża, że
					dziecku nie udaje się go wyrównać w trakcie zabaw i innych
					czynności naturalnych.
				</p>
				<div className='flex flex-col items-center justify-between gap-7 lg:flex-row'>
					<div className='flex flex-col gap-7'>
						<p className='underline'>
							Integracja sensoryczna skierowana jest do dzieci,
							które mają:
						</p>
						<ul className='list-inside list-disc pl-0 sm:pl-5'>
							<li>
								nadwrażliwość na bodźce (np. zatykanie uszu, nie
								lubią mycia włosów, obcinania paznokci)
							</li>
							<li>problemy z jazdą na rowerze, hulajnodze</li>
							<li>
								trudności z koordynacją ruchową np. słabo
								wycinają , rysują, nie łapią i nie kopią piłki
							</li>
							<li>nieprawidłowo chwytają kredkę, długopis</li>
							<li>kłopoty ze skupieniem uwagi</li>
							<li>mają opóźniony rozwój mowy</li>
							<li>potykają się, wpadają na ludzi, przedmioty</li>
							<li>
								są nadmiernie aktywne ruchowo (ciągle biegają,
								skaczą, kręcą się, huśtają).
							</li>
						</ul>
					</div>
					<Image
						src={photo}
						alt='integracja sensoryczna'
						objectFit='contain'
					/>
				</div>
				<p>
					Dla dzieci do lat 3 opracowaliśmy specjalny program{' '}
					<Link href='/klub-kangurka'>
						<a className='text-orange-color'>KLUB KANGURKA</a>
					</Link>{' '}
					wspierający rozwój procesu integracji sensorycznej.
				</p>
				<p>
					Przeprowadzamy diagnozę oceny rozwoju procesów integracji
					sensorycznej dziecka, które obejmują:
				</p>
				<ul className='list-inside list-disc pl-0 sm:pl-5'>
					<li>wywiad z rodzicami</li>
					<li>
						wypełnienie przez rodziców Kwestionariusza
						Sensomotorycznego
					</li>
					<li>obserwację kliniczną dziecka</li>
					<li>
						przeprowadzanie Południowo Kalifornijskich Testów dla
						dzieci od 4 r.ż.
					</li>
					<li>obserwację zachowania dziecka podczas badania</li>
					<li>
						obserwację swobodnej zabawy dziecka i jego reakcji na
						stymulację sensoryczną.
					</li>
				</ul>
				<p>Terapia trwa 45 minut</p>
			</OfferWrapper>
		</>
	);
};

export default IntegracjaSensorycznaPage;
