import PageWrapper from '../components/universal/page-wrapper';
import headerImage from '../public/images/pages/kontakt/Kontakt_kangurek.jpg';
import PageContent from '../components/universal/page-content';
import Kontakt from '../components/pages/kontakt/kontakt';
import { NextPage } from 'next';

const KontaktPage: NextPage = () => {
	return (
		<PageWrapper title='Kontakt' image={headerImage}>
			<PageContent>
				<Kontakt />
			</PageContent>
		</PageWrapper>
	);
};

export default KontaktPage;
