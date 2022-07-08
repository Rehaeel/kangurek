import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PageWrapper from '../components/universal/page-wrapper';
import { DOMAIN_NAME } from '../utils/constants';

const title: string = 'Klub Kangurka';
const description: string =
	'Nasze zajęcia mają charakter wspierający oraz profilaktyczny. Wspomagają rozwój niemowląt i małych dzieci do 3 roku życia w oparciu o metodę integracji sensorycznej i W. Sherborne. Stymulując zmysły dzieci wspieramy prawidłowy rozwój procesu integracji sensorycznej.';

const KlubKangurkaPage: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content='integracja sensoryczna, si, centrum-kangurek, klub kangurka'
				/>
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta
					property='og:url'
					content={`${DOMAIN_NAME}/${router.pathname}`}
				/>
			</Head>

			<PageWrapper>
				<div className='flex flex-col gap-5 lg:gap-7'>
					<div className='flex flex-col gap-5 lg:gap-7'>
						<b>KLUB KANGURKA</b>
						<p>
							Nasze zajęcia mają charakter wspierający oraz
							profilaktyczny. Wspomagają rozwój niemowląt i małych
							dzieci do 3 roku życia w oparciu o metodę integracji
							sensorycznej i W. Sherborne. Stymulując zmysły
							dzieci wspieramy prawidłowy rozwój procesu
							integracji sensorycznej.
						</p>
						<p>
							Zapraszamy wszystkie dzieci, a w szczególności z
							grupy ryzyka zaburzeń integracji sensorycznej
							(nieprawidłowości okołoporodowe, wcześniactwo,
							nieprawidłowości w napięciu mięśniowym, obniżona
							punktacja Apgar, problemy ze spaniem, ssaniem,
							nadwrażliwość na bodźce).
						</p>
					</div>

					<div className='grid grid-cols-1 items-center lg:grid-cols-2'>
						<div className='flex flex-col gap-4 lg:gap-5'>
							<p>
								Te zajęcia przeznaczone są dla Twojego dziecka,
								jeżeli zauważyłeś u niego następujące objawy:{' '}
							</p>
							<ul className='flex list-inside list-disc flex-col gap-1 pl-0 sm:pl-5 lg:gap-2'>
								<li>
									Nie czuje się komfortowo w bliskim kontakcie
									z najbliższymi
								</li>
								<li>
									Jest pobudzone, niespokojne na bodźce, które
									u większości dzieci działają uspokajająco
								</li>
								<li>
									Ciągle budzi się w nocy lub w dzień każdy
									szmer je wybudza
								</li>
								<li>Jest bardzo niespokojny, płaczliwy</li>
								<li>
									Ma problem z przejściem na pokarmy stałe, na
									jedzenie łyżeczką
								</li>
								<li>
									Źle toleruje wszelkie nowości- to sygnał,
									aby skonsultować się z terapeutą Integracji
									sensorycznej.
								</li>
							</ul>
						</div>
						<Image
							src='/images/pages/klub-kangurka/Klub-kangurka.jpg'
							alt='klub-kangurka'
							width={500}
							height={360}
							objectFit='contain'
						/>
					</div>
					<div className='flex flex-col gap-5'>
						<p>
							Podczas zajęć dziecko doświadcza różnorodnych
							bodźców zmysłowych, co odpowiednio i całościowo
							stymuluje jego rozwój.Rozbudzamy naturalną ciekawość
							dzieci.Towarzyszy nam muzyka i śpiew.Wprowadzamy
							dzieci w świat kształtów, kolorów, zapachów,
							dźwięków.Wspieramy rozwój psychoruchowy, usprawniamy
							motorykę dużą i małą.Nie brakuje też gimnastyki buzi
							i języka, wspierających rozwój mowy.
						</p>
						<p>
							Rodzice poznają dziecięce masażyki i zabawy
							paluszkowe.Dowiadują się w jaki sposób prawidłowo
							stymulować maluszka poprzez proste aktywności i
							zabawę.
						</p>
						<p>
							Rodzice z dziećmi świetnie bawią się, poznają
							pomysły na kreatywne, wspierające rozwój spędzania
							czasu.
						</p>
						<p>Korzyści z uczestniczenia w zajęciach:</p>
						<ul className='flex list-inside list-disc flex-col gap-1 pl-0 sm:pl-5 lg:gap-2'>
							<li>
								Wspieranie rozwoju sensomotorycznego dziecka
							</li>
							<li>
								Wzmocnienie więzi między dzieckiem a rodzicem
							</li>
							<li>Uspołecznienie dzieci</li>
							<li>Inspiracja rodziców do kreatywnej zabawy</li>
							<li>Wymiana doświadczeń między rodzicami</li>
						</ul>
						<p>
							Zajęcia odbywają się na sali integracji
							sensorycznej, w małych grupach, trwają 60
							min.Opiekunowie przebywają podczas zajęć razem z
							dziećmi.
						</p>
					</div>
				</div>
			</PageWrapper>
		</>
	);
};

export default KlubKangurkaPage;
