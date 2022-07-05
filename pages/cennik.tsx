import PageContent from '../components/universal/page-content';
import Cennik from '../components/pages/cennik';
import Button from '../components/universal/button';
import PageWrapper from '../components/universal/page-wrapper';
import headerImage from '../public/images/pages/cennik/Cennik_zakladka_kangurek.jpg';
import { NextPage } from 'next';

const CennikPage: NextPage = () => {
	return (
		<PageWrapper title='cennik' image={headerImage}>
			<PageContent>
				<Cennik />
				<Button href='/kontakt'>Zadzwoń i umów się na wizytę!</Button>
			</PageContent>
		</PageWrapper>
	);
};

export default CennikPage;
