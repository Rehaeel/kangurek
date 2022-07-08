import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import OfferWrapper from '../components/universal/offer-wrapper';
import { DOMAIN_NAME } from '../utils/constants';

const title: string = 'Sensomotoryczna Terapia Widzenia';
const description: string =
	'STW to program łączący statyczną i dynamiczną terapię funkcji wzrokowych. Wykorzystuje integrację bodźców wzrokowych, słuchowych i ruchowych. Ćwiczenia wzrokowe są wykonywane zarówno w pozycjach statycznych jak i w ruchu, angażując do pracy układ przedsionkowy i proprioceptywny. Dzięki temu następuje właściwa integracja bodźców wzrokowych z pozostałymi zmysłami. Metodę Sensomotorycznej terapii widzenia można stosować podczas klasycznych zajęć integracji sensorycznej, terapii pedagogicznej lub jako niezależną formę terapii. Na zajęciach wykorzystuje się stymulatory, które pozwalają na lepszą integrację wzrokowo- słuchową. Taka umiejętność stanowi podstawę uczenia się.';

const SensomotorycznaTerapiaWidzenia: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content='sensomotoryczna terapia widzenia, stw, integracja sensoryczna, centrum-kangurek'
				/>
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta
					property='og:url'
					content={`${DOMAIN_NAME}/${router.pathname}`}
				/>
			</Head>

			<OfferWrapper
				title='Sensomotoryczna Terapia Widzenia (STW)'
				image='/images/pages/sensomotoryczna-terapia-widzenia/Sensomotoryczna_terapia_widzenia_zakladka_kangurek.jpg'>
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
						src='/images/pages/sensomotoryczna-terapia-widzenia/STW_chlopiec.jpg'
						alt='sensomotoryczna terapia widzenia (STW)'
						objectFit='contain'
						width={350}
						height={260}
					/>
				</div>
			</OfferWrapper>
		</>
	);
};

export default SensomotorycznaTerapiaWidzenia;
