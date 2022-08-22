import OfferWrapper from '../components/universal/offer-wrapper';
import Image from 'next/image';
import { NextPage } from 'next';
import Head from 'next/head';
import { DOMAIN_NAME } from '../utils/constants';
import { useRouter } from 'next/router';
import { useGetGoogleAnalyticsPath } from '../utils/hooks';

const title: string = 'Kreatywność';
const description: string =
	'Nasze zajęcia łączą muzykoterapię, metodę Sensoplastyki, Klanzę, Pedagogikę Zabawy, Metodę Dobrego Startu oraz wszystkie techniki plastyczne: malarskie, rysunku, modelowania, kolażu, batiku, decoupage.';

const KreatywnoscPage: NextPage = () => {
	const router = useRouter();
	useGetGoogleAnalyticsPath();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content='kreatywność, integracja sensoryczna, centrum-kangurek'
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
				title='kreatywność'
				image='/images/pages/kreatywnosc/Kreatywnosc_zakladka_kangurek.jpg'>
				<div className='grid grid-cols-1 gap-4 sm:gap-7 lg:grid-cols-2'>
					<div className='flex flex-col gap-5 sm:gap-7'>
						<b className='underline'>Kreatywność</b>

						<p>
							Prowadzimy zajęcia grupowe z kreatywności, które
							mają na celu:
						</p>
						<ul className='list-inside list-disc pl-0 sm:pl-5'>
							<li>rozwijanie twórczości dzieci</li>
							<li>wspieranie wyobraźni</li>
							<li>rozwijanie zainteresowań</li>
							<li>poprawę motoryki małej i dużej</li>
							<li>normalizację zmysłów dotyku, słuchu, wzroku</li>
						</ul>
						<p>
							Nasze zajęcia łączą muzykoterapię, metodę
							Sensoplastyki, Klanzę, Pedagogikę Zabawy, Metodę
							Dobrego Startu oraz wszystkie techniki plastyczne:
							malarskie, rysunku, modelowania, kolażu, batiku,
							decoupage.
						</p>
					</div>
					<Image
						src='/images/pages/kreatywnosc/Kreatywnosc.jpg'
						alt='kreatywność'
						objectFit='contain'
						width={390}
						height={260}
					/>
				</div>
			</OfferWrapper>
		</>
	);
};

export default KreatywnoscPage;
