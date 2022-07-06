import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useWindowSize } from '../utils/hooks';
import { WindowSize } from './types';
import mobileHeaderImg from '../public/images/pages/home/kangurek-mobile.jpg';
import headerImg from '../public/images/pages/home/Centrum-Terapii-i-Rozwoju-Dziecka-Kangurek.jpg';
import PageContent from '../components/universal/page-content';
import lapki from '../public/images/pages/home/male_lapki.jpg';

const Home: NextPage = () => {
	const [screenWidth, setScreenWidth] = useState<number>(0);
	const { width }: WindowSize = useWindowSize();

	useEffect(() => {
		if (width) setScreenWidth(width);
	}, [width]);

	return (
		<>
			<header className='h-auto w-full'>
				{screenWidth > 760 ? (
					<Image
						src={headerImg}
						alt='Integracja Sensoryczna okładka'
						priority
						layout='responsive'
					/>
				) : (
					<Image
						src={mobileHeaderImg}
						alt='Integracja Sensoryczna okładka'
						priority
						layout='fill'
					/>
				)}
				<h3 className='my-4 mr-[5%] text-right text-lg font-bold text-[#667]'>
					„Czego nie ma najpierw w zmysłach, tego nie ma później w
					umyśle” <br />
					~B. Pasca
				</h3>
			</header>

			<PageContent>
				<h1 className='text-4xl'>O nas</h1>
				<p className='text-lg'>
					W CENTRUM TERAPII I ROZWOJU DZIECKA KANGUREK łączymy naukę z
					zabawą, pomagając w ten sposób dzieciom, które przeżywają
					trudności rozwojowe, edukacyjne, związane z integracją
					zmysłów, z koordynacją wzrokowo-ruchową.
				</p>
				<div className='flex gap-5 lg:gap-7'>
					<div className='flex w-1/2 flex-col gap-4 lg:gap-7'>
						<p className='text-left text-lg'>
							Naszą ofertę kierujemy do dzieci:
						</p>
						<ul className='list-inside list-disc'>
							<li>z zaburzeniami integracji sensorycznej</li>

							<li>z zaburzeniami mowy, słuchu, wzroku</li>

							<li>
								z problemami szkolnymi (koncentracją, czytaniem,
								pisaniem, liczeniem)
							</li>

							<li>z zaburzoną koordynacją ruchową</li>

							<li>z nadpobudliwością psychoruchową</li>
						</ul>

						<p>
							Bazując na naszym sporym doświadczeniu w pracy z
							dziećmi prowadzimy również szkolenia i warsztaty dla
							nauczycieli i rodziców.
						</p>
						<p>
							Ponadto organizujemy kursy dla matek z małymi
							dziećmi.
						</p>
						<p>
							Cechuje nas miłe, sympatyczne usposobienie, chęć
							niesienia pomocy, rzetelność i profesjonalizm
						</p>
						<p>Zapraszamy</p>
					</div>
					<div className='flex w-1/2 items-center justify-center'>
						<Image
							src={lapki}
							alt='Integracja Sensoryczna w praktyce'
						/>
					</div>
				</div>
			</PageContent>
		</>
	);
};

export default Home;
