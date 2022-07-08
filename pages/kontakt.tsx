import PageWrapper from '../components/universal/page-wrapper';
import PageContent from '../components/universal/page-content';
import Kontakt from '../components/pages/kontakt/kontakt';
import { NextPage } from 'next';
import Head from 'next/head';
import { DOMAIN_NAME } from '../utils/constants';
import { useRouter } from 'next/router';

const title: string = 'Kontakt';
const description: string =
	'Zapraszamy do kontaktu z Centrum Terapii Rozwoju Dziecka Kangurek (Centrum-Kangurek)';

const KontaktPage: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content='kontakt, integracja sensoryczna, centrum-kangurek'
				/>
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta
					property='og:url'
					content={`${DOMAIN_NAME}/${router.pathname}`}
				/>
			</Head>

			<PageWrapper
				title='Kontakt'
				image='/images/pages/kontakt/Kontakt_kangurek.jpg'>
				<PageContent>
					<Kontakt />
				</PageContent>
			</PageWrapper>
		</>
	);
};

export default KontaktPage;
