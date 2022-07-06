import Image from 'next/image';
import OfferWrapper from '../components/universal/offer-wrapper';
import tp from '../public/images/pages/terapia-pedagogiczna/Terapia_pedagogiczna_zakladka_kangurek.jpg';
import teraphy from '../public/images/pages/terapia-pedagogiczna/Terapia-pedagogiczna-1.jpg';
import { NextPage } from 'next';
import Head from 'next/head';

const TerapiaPedagogicznaPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Terapia pedagogiczna</title>
				<meta
					name='description'
					content='Zajęcia z terapii pedagogicznej służą wspomaganiu rozwoju dzieci z różnymi trudnościami, które wpływają niekorzystnie na proces zdobywania umiejętności szkolnych. Często przyczyny będące podłożem trudności dzieci są trudne do zdiagnozowania lub bardzo złożone, dzieci samodzielnie nie są w stanie poradzić sobie z narastającymi problemami. Braki, które pojawiają się na początku drogi edukacyjnej, narastają, kumulują się, obejmują coraz szersze obszary. W efekcie stają się przyczyną dodatkowych zaburzeń np. emocjonalnych.'
				/>
				<meta
					name='keywords'
					content='terapia pedagogiczna, integracja sensoryczna, centrum-kangurek'
				/>
			</Head>

			<OfferWrapper title='terapia pedagogiczna' image={tp}>
				<p>
					<b>Terapia pedagogiczna</b>
				</p>
				<p>
					Zajęcia z terapii pedagogicznej służą wspomaganiu rozwoju
					dzieci z różnymi trudnościami, które wpływają niekorzystnie
					na proces zdobywania umiejętności szkolnych. Często
					przyczyny będące podłożem trudności dzieci są trudne do
					zdiagnozowania lub bardzo złożone, dzieci samodzielnie nie
					są w stanie poradzić sobie z narastającymi problemami.
					Braki, które pojawiają się na początku drogi edukacyjnej,
					narastają, kumulują się, obejmują coraz szersze obszary. W
					efekcie stają się przyczyną dodatkowych zaburzeń np.
					emocjonalnych.
				</p>
				<div className='flex flex-col items-center justify-between gap-7 lg:flex-row'>
					<div className='flex flex-col gap-7'>
						<p>
							Problemy, które wpiera terapia pedagogiczna dotyczą
							m.in.:
						</p>
						<ul className='list-inside list-disc pl-0 sm:pl-5'>
							<li>
								Opóźnienia i zaburzenia percepcji wzrokowej i
								słuchowej
							</li>
							<li>Deficyt pamięciowy</li>
							<li>
								Deficyt uwagi powiązany z nadmierną ruchliwością
							</li>
						</ul>
						<p>
							Podczas zajęć prowadzimy ćwiczenia z czytania,
							pisania, liczenia.
							<br />
							Robimy to w kreatywny sposób specjalnymi metodami,
							które są interesujące dla dziecka i motywują do
							nauki.
						</p>
					</div>
					<Image
						src={teraphy}
						alt='terapia pedagogiczna'
						objectFit='contain'
					/>
				</div>
			</OfferWrapper>
		</>
	);
};

export default TerapiaPedagogicznaPage;
