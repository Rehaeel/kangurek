import PageWrapper from '../components/universal/page-wrapper';
import headerImage from '../public/images/pages/kontakt/Kontakt_kangurek.jpg';
import PageContent from '../components/universal/page-content';
import Kontakt from '../components/pages/kontakt/kontakt';
import { NextPage } from 'next';
import Head from 'next/head';

const KontaktPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Kontakt</title>
				<meta
					name='description'
					content='Zapraszamy do kontaktu z Centrum Terapii Rozwoju Dziecka Kangurek (Centrum-Kangurek)'
				/>
				<meta
					name='keywords'
					content='kontakt, integracja sensoryczna, centrum-kangurek'
				/>
			</Head>

			<PageWrapper title='Kontakt' image={headerImage}>
				<PageContent>
					<Kontakt />
				</PageContent>
			</PageWrapper>
		</>
	);
};

export default KontaktPage;
