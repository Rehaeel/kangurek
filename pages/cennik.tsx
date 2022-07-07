import PageContent from '../components/universal/page-content';
import Cennik from '../components/pages/cennik';
import Button from '../components/universal/button';
import PageWrapper from '../components/universal/page-wrapper';
import { NextPage } from 'next';
import Head from 'next/head';

const CennikPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Cennik</title>
				<meta
					name='description'
					content='Sprawdź aktualne ceny zajęć, terapii i innych usług oferowanych przez Centrum Kangurek'
				/>
				<meta
					name='keywords'
					content='cennik, integracja sensoryczna, centrum-kangurek'
				/>
			</Head>

			<PageWrapper
				title='cennik'
				image='/images/pages/cennik/Cennik_zakladka_kangurek.jpg'>
				<PageContent>
					<Cennik />
					<Button href='/kontakt'>
						Zadzwoń i umów się na wizytę!
					</Button>
				</PageContent>
			</PageWrapper>
		</>
	);
};

export default CennikPage;
