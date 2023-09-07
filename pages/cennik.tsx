import PageContent from '../components/universal/page-content';
import Cennik from '../components/pages/cennik';
import Button from '../components/universal/button';
import PageWrapper from '../components/universal/page-wrapper';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DOMAIN_NAME } from '../utils/constants';

const title: string = 'Cennik';
const description: string =
	'Sprawdź aktualne ceny zajęć, terapii i innych usług oferowanych przez Centrum Kangurek';

const CennikPage: NextPage = () => {
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

			<PageWrapper
				title='cennik'
				image='/images/pages/cennik/Cennik_zakladka_kangurek.jpg'>
				<PageContent>
					<Cennik />
					<Button href='/kontakt' onClick={()=> window.fbq('track', 'Kontakt', {source: 'Cennik'})}>
						Zadzwoń i umów się na wizytę!
					</Button>
				</PageContent>
			</PageWrapper>
		</>
	);
};

export default CennikPage;
