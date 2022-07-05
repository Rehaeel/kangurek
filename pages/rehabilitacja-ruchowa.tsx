import { NextPage } from 'next';
import OfferWrapper from '../components/universal/offer-wrapper';
import rh from '../public/images/pages/rehabilitacja-ruchowa/Zajecia_ogolnorozwojowe_zakladka_kangurek.jpg';

const RehabilitacjaRuchowaPage: NextPage = () => {
	return (
		<OfferWrapper title='rehabilitacja ruchowa' image={rh}>
			<b className='underline'>Rehabilitacja ruchowa</b>

			<p>
				Głównym celem rehabilitacji ruchowej jest przywrócenie
				maksymalnie możliwej sprawności fizycznej i komfortu życia
				dziecka. Ruch jest niezbędnym elementem życia każdego człowieka,
				buduje masą mięśniową, a zarazem sprawność fizyczną. Opóźnienia
				w rozwoju motorycznym często sygnalizują opóźnienia w rozwoju
				poznawczym, emocjonalnym i społecznym. Prawidłowy rozwój
				motoryczny obejmuje właściwy rozwój lokomocji, postawy oraz
				manipulacji. Dzieci uwielbiają doznania ruchowe już od momentu
				narodzin. Dziecko, które ma zapewnioną odpowiednią dawkę ruchu,
				mają większe predyspozycje do prawidłowego rozwoju umysłowego na
				miarę swoich możliwości.
			</p>
			<p>
				Zajęcia ruchowe prowadzone w są w małych grupach wiekowych na
				sali integracji sensorycznej. Celem ich jest wyzwalanie
				aktywności ruchowej poprzez zabawy sportowe oparte na naturalnej
				potrzebie ruchu. Łączą one elementy gimnastyki korekcyjnej,
				integrację sensoryczną, rytmikę, metodę Weroniki Sherborne.
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
			<ul className='list-disc list-inside pl-0 sm:pl-5'>
				<li>Problemy z ogólną koordynacją ruchową</li>
				<li>Trudności z prawidłową dystrybucją napięcia mięśniowego</li>
				<li>Problemy z ruchami naprzemiennymi</li>
				<li>Trudności ze schematem ciała</li>
			</ul>
		</OfferWrapper>
	);
};
export default RehabilitacjaRuchowaPage;
