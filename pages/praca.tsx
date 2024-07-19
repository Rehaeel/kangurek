'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { DOMAIN_NAME } from '../utils/constants';
import PageWrapper from '../components/universal/page-wrapper';
import PageContent from '../components/universal/page-content';
import Link from 'next/link';

const title: string = 'Praca';
const description: string =
	'Zapraszamy do współpracy ambitnych i pracowitych terapeutów, ludzi z pasją, kochających dzieci i chcących rozwijać się zawodowo';

const PracaPage: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content='cennik, integracja sensoryczna, centrum-kangurek'
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

			<PageWrapper title='Praca' image='/images/pages/praca/Praca.jpg'>
				<PageContent>
					<div className='flex flex-col gap-4'>
						<p>
							Zapraszamy do współpracy ambitnych i pracowitych
							terapeutów, ludzi z pasją, kochających dzieci i
							chcących rozwijać się zawodowo
						</p>

						<p>Wymagania:</p>
						<ul className='list-inside list-disc'>
							<li>
								Wykształcenie lub ukończone kursy terapii
								Integracji Sensorycznej pierwszego i drugiego
								stopnia
							</li>
							<li>
								Umiejętność pracy z dziećmi i nawiązywania
								dobrych relacji z nimi i rodzicami.
							</li>
							<li>Chęć ciągłego podnoszenia kwalifikacji</li>
						</ul>

						<p>
							Oferujemy pracę w dobrze wyposażonej Sali Integracji
							Sensorycznej, w miłej i przyjaznej atmosferze.
						</p>
						<p>
							Jeśli jesteś osobą, która spełnia powyższe wymagania
							i chciałabyś dołączyć do naszego zespołu, prosimy o
							przesłanie CV oraz kontaktu pod adresem email:
						</p>
						<Link
							href={'mailto:info@centrum-kangurek.pl'}
							className='text-orange-color'>
							info@centrum-kangurek.pl
						</Link>

						<p>
							Zapraszamy również studentów na praktyki, a po
							ukończeniu szkoły jest możliwość podjęcia pracy u
							nas.
						</p>
					</div>
				</PageContent>
			</PageWrapper>
		</>
	);
};

export default PracaPage;
