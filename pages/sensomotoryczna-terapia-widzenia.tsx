import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import OfferWrapper from '../components/universal/offer-wrapper';
import stwHeaderImg from '../public/images/pages/sensomotoryczna-terapia-widzenia/Sensomotoryczna_terapia_widzenia_zakladka_kangurek.jpg';
import stwImage from '../public/images/pages/sensomotoryczna-terapia-widzenia/STW_chlopiec.jpg';

const SensomotorycznaTerapiaWidzenia: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sensomotoryczna Terapia Widzenia</title>
				<meta
					name='description'
					content='STW to program łączący statyczną i dynamiczną terapię funkcji wzrokowych. Wykorzystuje integrację bodźców wzrokowych, słuchowych i ruchowych. Ćwiczenia wzrokowe są wykonywane zarówno w pozycjach statycznych jak i w ruchu, angażując do pracy układ przedsionkowy i proprioceptywny. Dzięki temu następuje właściwa integracja bodźców wzrokowych z pozostałymi zmysłami. Metodę Sensomotorycznej terapii widzenia można stosować podczas klasycznych zajęć integracji sensorycznej, terapii pedagogicznej lub jako niezależną formę terapii. Na zajęciach wykorzystuje się stymulatory, które pozwalają na lepszą integrację wzrokowo- słuchową. Taka umiejętność stanowi podstawę uczenia się.'
				/>
				<meta
					name='keywords'
					content='sensomotoryczna terapia widzenia, stw, integracja sensoryczna, centrum-kangurek'
				/>
			</Head>

			<OfferWrapper
				title='Sensomotoryczna Terapia Widzenia (STW)'
				image={stwHeaderImg}>
				<b className='font-black'>
					Sensomotoryczna terapia widzenia (STW)
				</b>

				<p>
					STW to program łączący statyczną i dynamiczną terapię
					funkcji wzrokowych. Wykorzystuje integrację bodźców
					wzrokowych, słuchowych i ruchowych.
				</p>
				<p>
					Ćwiczenia wzrokowe są wykonywane zarówno w pozycjach
					statycznych jak i w ruchu, angażując do pracy układ
					przedsionkowy i proprioceptywny. Dzięki temu następuje
					właściwa integracja bodźców wzrokowych z pozostałymi
					zmysłami. Metodę Sensomotorycznej terapii widzenia można
					stosować podczas klasycznych zajęć integracji sensorycznej,
					terapii pedagogicznej lub jako niezależną formę terapii. Na
					zajęciach wykorzystuje się stymulatory, które pozwalają na
					lepszą integrację wzrokowo- słuchową. Taka umiejętność
					stanowi podstawę uczenia się.
				</p>
				<div className='flex flex-col items-center justify-between gap-7 lg:flex-row'>
					<div className='flex flex-col gap-7'>
						<p className='underline'>
							STW skierowana się do dzieci, u których występują:
						</p>
						<ul className='list-inside list-disc pl-0 sm:pl-5'>
							<li>
								trudności szkolne: kłopoty z opanowaniem
								umiejętności czytania, pisania, umiejętności
								matematycznych, obniżony poziom rozumienia,
								obniżona pamięć wzrokowa i słuchowa oraz
								motoryczna
							</li>
							<li>obniżona koordynacja wzrokowo- ruchowa</li>
							<li>zaburzenia koncentracji uwagi</li>
							<li>zaburzenia integracji sensorycznej</li>
							<li>dysleksja</li>
						</ul>
					</div>
					<Image
						src={stwImage}
						alt='sensomotoryczna terapia widzenia (STW)'
						objectFit='contain'
					/>
				</div>
			</OfferWrapper>
		</>
	);
};

export default SensomotorycznaTerapiaWidzenia;
