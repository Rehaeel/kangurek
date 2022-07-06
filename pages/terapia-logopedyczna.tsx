import OfferWrapper from '../components/universal/offer-wrapper';
import Image from 'next/image';
import { NextPage } from 'next';
import Head from 'next/head';

const TerapiaLogopedycznaPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Terapia logopedyczna</title>
				<meta
					name='description'
					content='Wczesna diagnoza problemów logopedycznych pozwala w porę dostrzec trudności dziecka i szybciej oraz skuteczniej je zniwelować zanim dziecko rozpocznie naukę w szkole.'
				/>
				<meta
					name='keywords'
					content='terapia logopedyczna, integracja sensoryczna, centrum-kangurek'
				/>
			</Head>

			<OfferWrapper
				title='Terapia Logopedyczna'
				image='/images/pages/terapia-logopedyczna/Terapia_logopedyczna_zakladka_kangurek.jpg'>
				<div className='grid grid-cols-1 items-center justify-items-center gap-7 lg:grid-cols-2'>
					<div className='flex w-full flex-col gap-7'>
						<b className='underline'>Terapia logopedyczna:</b>

						<p>
							Wczesna diagnoza problemów logopedycznych pozwala w
							porę dostrzec trudności dziecka i szybciej oraz
							skuteczniej je zniwelować zanim dziecko rozpocznie
							naukę w szkole.
						</p>
						<ul className='list-inside list-disc pl-0 sm:pl-5'>
							<li>
								kształtuje prawidłową mowę , dba o jej
								prawidłowy i jak najlepszy rozwój pod względem
								fonetycznym, gramatycznym i leksykalnym
							</li>
							<li>doskonali mowę już ukształtowaną</li>
							<li>usuwa wady mowy</li>
							<li>
								naucza mowy (mówienia i rozumienia) w wypadku
								jej braku lub utraty
							</li>
							<li>usuwa zaburzenia głosu</li>
							<li>usuwanie trudności w czytaniu i pisaniu</li>
						</ul>
					</div>

					<Image
						src='/images/pages/terapia-logopedyczna/Terapia_logopedyczna.jpg'
						alt='terapia logopedyczna'
						objectFit='contain'
						width={460}
						height={260}
					/>
				</div>
			</OfferWrapper>
		</>
	);
};

export default TerapiaLogopedycznaPage;
