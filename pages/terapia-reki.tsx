import OfferWrapper from '../components/universal/offer-wrapper';
import Image from 'next/image';
import { NextPage } from 'next';
import Head from 'next/head';
import { DOMAIN_NAME } from '../utils/constants';
import { useRouter } from 'next/router';

const title: string = 'Terapia ręki';
const description: string =
	'Zajęcia terapii ręki łączą w sobie integrację sensoryczną, elementy zajęć ogólnorozwojowych, terapię widzenia, kreatywność, zabawy paluszkowe, ćwiczenia z zakresu samoobsługi.';

const TerapiaRekiPage: NextPage = () => {
	const router = useRouter();
	
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content='terapia ręki, integracja sensoryczna, centrum-kangurek'
				/>
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta
					property='og:url'
					content={`${DOMAIN_NAME}/${router.pathname}`}
				/>
			</Head>

			<OfferWrapper
				title='terapia ręki'
				image='/images/pages/terapia-reki/Terapia_reki_zakladka_kangurek.jpg'>
				<div className='grid grid-cols-1 items-center gap-4 sm:gap-7 md:grid-cols-2'>
					<div className='flex w-full flex-col gap-5'>
						<b className='underline'>Terapia ręki</b>
						<p>Przeznaczona jest dla dzieci, które:</p>
						<ul className='list-inside list-disc pl-0 sm:pl-5'>
							<li>nie lubią rysować</li>
							<li>nieprawidłowo trzymają długopis</li>
							<li>
								mają kłopoty z cięciem, lepieniem, wiązaniem
								sznurowadeł, zapinaniem guzików
							</li>
							<li>niedokładnie rysują szlaczki, piszą literki</li>
						</ul>
					</div>
					<Image
						src='/images/pages/terapia-reki/Terapia_reki.jpg'
						alt='terapia ręki'
						objectFit='contain'
						width={390}
						height={260}
					/>
				</div>
				<div className='grid grid-cols-1 gap-4 sm:gap-7 md:grid-cols-2'>
					<div className='flex flex-col gap-5'>
						<p>
							Zajęcia terapii ręki łączą w sobie integrację
							sensoryczną, elementy zajęć ogólnorozwojowych,
							terapię widzenia, kreatywność, zabawy paluszkowe,
							ćwiczenia z zakresu samoobsługi.
						</p>
						<p>
							Kontrola nad ciałem rozwija się stopniowo,
							poczynając od głowy przechodząc w kierunku stóp,
							potem osiągamy stabilizację centralną, aż do
							sprawnego posługiwania się dłonią.
						</p>
					</div>
					<div className='flex flex-col gap-5'>
						<p className='underline'>
							Terapia ręki obejmuje ćwiczenia całego ciała:
						</p>
						<ul className='list-inside list-disc pl-0 sm:pl-5'>
							<li>prawidłowej postawy</li>
							<li>wzmacnianie napięcia mięśniowego</li>
							<li>poprawę zachowania równowagi</li>
							<li>doskonalenie czucia powierzchniowego</li>
							<li>poprawę percepcji wzrokowej</li>
							<li>usprawnianie koordynacji wzrokowo-ruchowej</li>
						</ul>
					</div>
				</div>
			</OfferWrapper>
		</>
	);
};

export default TerapiaRekiPage;
