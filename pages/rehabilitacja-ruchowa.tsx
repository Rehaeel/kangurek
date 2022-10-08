import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import OfferWrapper from '../components/universal/offer-wrapper';
import { DOMAIN_NAME } from '../utils/constants';
import { useGetGoogleAnalyticsPath } from '../utils/hooks';

const title: string = 'Rehabilitacja ruchowa';
const description: string =
	'Głównym celem rehabilitacji ruchowej jest przywrócenie maksymalnie możliwej sprawności fizycznej i komfortu życia dziecka. Ruch jest niezbędnym elementem życia każdego człowieka, buduje masą mięśniową, a zarazem sprawność fizyczną. Opóźnienia w rozwoju motorycznym często sygnalizują opóźnienia w rozwoju poznawczym, emocjonalnym i społecznym. Prawidłowy rozwój motoryczny obejmuje właściwy rozwój lokomocji, postawy oraz manipulacji. Dzieci uwielbiają doznania ruchowe już od momentu narodzin. Dziecko, które ma zapewnioną odpowiednią dawkę ruchu, mają większe predyspozycje do prawidłowego rozwoju umysłowego na miarę swoich możliwości.';

const RehabilitacjaRuchowaPage: NextPage = () => {
	const router = useRouter();
	useGetGoogleAnalyticsPath();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content='rehabilitacja ruchowa, integracja sensoryczna, centrum-kangurek'
				/>
				<meta
					property='og:title'
					content={`Centrum Kangurek - ${title}`}
				/>
				<meta property='og:description' content={description} />
				<meta
					property='og:url'
					content={`${DOMAIN_NAME}/${router.pathname}`}
				/>
			</Head>

			<OfferWrapper
				title='rehabilitacja ruchowa'
				image='/images/pages/rehabilitacja-ruchowa/Zajecia_ogolnorozwojowe_zakladka_kangurek.jpg'>
				<b className='underline'>Rehabilitacja ruchowa</b>

				<p>
					Głównym celem rehabilitacji ruchowej jest przywrócenie
					maksymalnie możliwej sprawności fizycznej i komfortu życia
					dziecka. Ruch jest niezbędnym elementem życia każdego
					człowieka, buduje masą mięśniową, a zarazem sprawność
					fizyczną. Opóźnienia w rozwoju motorycznym często
					sygnalizują opóźnienia w rozwoju poznawczym, emocjonalnym i
					społecznym. Prawidłowy rozwój motoryczny obejmuje właściwy
					rozwój lokomocji, postawy oraz manipulacji. Dzieci
					uwielbiają doznania ruchowe już od momentu narodzin.
					Dziecko, które ma zapewnioną odpowiednią dawkę ruchu, mają
					większe predyspozycje do prawidłowego rozwoju umysłowego na
					miarę swoich możliwości.
				</p>
				<p>
					Zajęcia ruchowe prowadzone w są w małych grupach wiekowych
					na sali integracji sensorycznej. Celem ich jest wyzwalanie
					aktywności ruchowej poprzez zabawy sportowe oparte na
					naturalnej potrzebie ruchu. Łączą one elementy gimnastyki
					korekcyjnej, integrację sensoryczną, rytmikę, metodę
					Weroniki Sherborne.
				</p>
				<p>
					Efektem prowadzonych zajęć jest lepsza sprawność fizyczna
					dzieci, poczucie bezpieczeństwa i lepsze relacje z bliskimi.
				</p>
				<p>
					<b className='underline'>
						Zajęcia skierowane są dla dzieci, które mają:
					</b>
				</p>
				<ul className='list-inside list-disc pl-0 sm:pl-5'>
					<li>Problemy z ogólną koordynacją ruchową</li>
					<li>
						Trudności z prawidłową dystrybucją napięcia mięśniowego
					</li>
					<li>Problemy z ruchami naprzemiennymi</li>
					<li>Trudności ze schematem ciała</li>
				</ul>
			</OfferWrapper>
		</>
	);
};
export default RehabilitacjaRuchowaPage;
