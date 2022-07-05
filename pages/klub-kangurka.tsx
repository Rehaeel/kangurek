import { NextPage } from 'next';
import Image from 'next/image';
import PageWrapper from '../components/universal/page-wrapper';
import img from '../public/images/pages/klub-kangurka/Klub-kangurka.jpg';

const KlubKangurkaPage: NextPage = () => {
	return (
		<PageWrapper>
			<div className='flex flex-col gap-5 lg:gap-7'>
				<div className='flex flex-col gap-5 lg:gap-7'>
					<b>KLUB KANGURKA</b>
					<p>
						Nasze zajęcia mają charakter wspierający oraz
						profilaktyczny. Wspomagają rozwój niemowląt i małych
						dzieci do 3 roku życia w oparciu o metodę integracji
						sensorycznej i W. Sherborne. Stymulując zmysły dzieci
						wspieramy prawidłowy rozwój procesu integracji
						sensorycznej.
					</p>
					<p>
						Zapraszamy wszystkie dzieci, a w szczególności z grupy
						ryzyka zaburzeń integracji sensorycznej
						(nieprawidłowości okołoporodowe, wcześniactwo,
						nieprawidłowości w napięciu mięśniowym, obniżona
						punktacja Apgar, problemy ze spaniem, ssaniem,
						nadwrażliwość na bodźce).
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
					<div className='flex flex-col gap-4 lg:gap-5'>
						<p>
							Te zajęcia przeznaczone są dla Twojego dziecka,
							jeżeli zauważyłeś u niego następujące objawy:{' '}
						</p>
						<ul className='list-disc list-inside pl-0 sm:pl-5 flex flex-col gap-1 lg:gap-2'>
							<li>
								Nie czuje się komfortowo w bliskim kontakcie z
								najbliższymi
							</li>
							<li>
								Jest pobudzone, niespokojne na bodźce, które u
								większości dzieci działają uspokajająco
							</li>
							<li>
								Ciągle budzi się w nocy lub w dzień każdy szmer
								je wybudza
							</li>
							<li>Jest bardzo niespokojny, płaczliwy</li>
							<li>
								Ma problem z przejściem na pokarmy stałe, na
								jedzenie łyżeczką
							</li>
							<li>
								Źle toleruje wszelkie nowości- to sygnał, aby
								skonsultować się z terapeutą Integracji
								sensorycznej.
							</li>
						</ul>
					</div>
					<Image src={img} alt='klub-kangurka' objectFit='contain' />
				</div>
				<div className='flex flex-col gap-5'>
					<p>
						Podczas zajęć dziecko doświadcza różnorodnych bodźców
						zmysłowych, co odpowiednio i całościowo stymuluje jego
						rozwój.Rozbudzamy naturalną ciekawość dzieci.Towarzyszy
						nam muzyka i śpiew.Wprowadzamy dzieci w świat kształtów,
						kolorów, zapachów, dźwięków.Wspieramy rozwój
						psychoruchowy, usprawniamy motorykę dużą i małą.Nie
						brakuje też gimnastyki buzi i języka, wspierających
						rozwój mowy.
					</p>
					<p>
						Rodzice poznają dziecięce masażyki i zabawy
						paluszkowe.Dowiadują się w jaki sposób prawidłowo
						stymulować maluszka poprzez proste aktywności i zabawę.
					</p>
					<p>
						Rodzice z dziećmi świetnie bawią się, poznają pomysły na
						kreatywne, wspierające rozwój spędzania czasu.
					</p>
					<p>Korzyści z uczestniczenia w zajęciach:</p>
					<ul className='list-disc list-inside pl-0 sm:pl-5 flex flex-col gap-1 lg:gap-2'>
						<li>Wspieranie rozwoju sensomotorycznego dziecka</li>
						<li>Wzmocnienie więzi między dzieckiem a rodzicem</li>
						<li>Uspołecznienie dzieci</li>
						<li>Inspiracja rodziców do kreatywnej zabawy</li>
						<li>Wymiana doświadczeń między rodzicami</li>
					</ul>
					<p>
						Zajęcia odbywają się na sali integracji sensorycznej, w
						małych grupach, trwają 60 min.Opiekunowie przebywają
						podczas zajęć razem z dziećmi.
					</p>
				</div>
			</div>
		</PageWrapper>
	);
};

export default KlubKangurkaPage;
