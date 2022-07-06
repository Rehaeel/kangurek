import OfferWrapper from '../components/universal/offer-wrapper';
import headerImg from '../public/images/pages/terapia-reki/Terapia_reki_zakladka_kangurek.jpg';
import img from '../public/images/pages/terapia-reki/Terapia_reki.jpg';
import Image from 'next/image';
import { NextPage } from 'next';
import Head from 'next/head';

const TerapiaRekiPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Terapia ręki</title>
				<meta
					name='description'
					content='Zajęcia terapii ręki łączą w sobie integrację sensoryczną, elementy zajęć ogólnorozwojowych, terapię widzenia, kreatywność, zabawy paluszkowe, ćwiczenia z zakresu samoobsługi.'
				/>
				<meta
					name='keywords'
					content='terapia ręki, integracja sensoryczna, centrum-kangurek'
				/>
			</Head>

			<OfferWrapper title='terapia ręki' image={headerImg}>
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
					<Image src={img} alt='terapia ręki' objectFit='contain' />
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
