import OfferWrapper from '../components/universal/offer-wrapper';
import headerImg from '../public/images/pages/kreatywnosc/Kreatywnosc_zakladka_kangurek.jpg';
import img from '../public/images/pages/kreatywnosc/Kreatywnosc.jpg';
import Image from 'next/image';
import { NextPage } from 'next';

const KreatywnoscPage: NextPage = () => {
	return (
		<OfferWrapper title='kreatywność' image={headerImg}>
			<div className='grid grid-cols-1 gap-4 sm:gap-7 lg:grid-cols-2'>
				<div className='flex flex-col gap-5 sm:gap-7'>
					<b className='underline'>Kreatywność</b>

					<p>
						Prowadzimy zajęcia grupowe z kreatywności, które mają na
						celu:
					</p>
					<ul className='list-inside list-disc pl-0 sm:pl-5'>
						<li>rozwijanie twórczości dzieci</li>
						<li>wspieranie wyobraźni</li>
						<li>rozwijanie zainteresowań</li>
						<li>poprawę motoryki małej i dużej</li>
						<li>normalizację zmysłów dotyku, słuchu, wzroku</li>
					</ul>
					<p>
						Nasze zajęcia łączą muzykoterapię, metodę Sensoplastyki,
						Klanzę, Pedagogikę Zabawy, Metodę Dobrego Startu oraz
						wszystkie techniki plastyczne: malarskie, rysunku,
						modelowania, kolażu, batiku, decoupage.
					</p>
				</div>
				<Image src={img} alt='kreatywność' objectFit='contain' />
			</div>
		</OfferWrapper>
	);
};

export default KreatywnoscPage;
