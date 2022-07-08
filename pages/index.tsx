import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useWindowSize } from '../utils/hooks';
import PageContent from '../components/universal/page-content';
import { WindowSize } from '../utils/types';
import lapki from '../public/images/pages/home/male_lapki.jpg';
import headerImg from '../public/images/pages/home/Centrum-Terapii-i-Rozwoju-Dziecka-Kangurek.jpg';
import headerImgMobile from '../public/images/pages/home/kangurek-mobile.jpg';
import Head from 'next/head';
import Kontakt from '../components/pages/kontakt/kontakt';
import Offer from '../components/pages/main/offer';
import { DOMAIN_NAME } from '../utils/constants';
import { useRouter } from 'next/router';

const title: string = 'Centrum Kangurek';
const description: string =
	'W Centrum Terapii i Rozwoju Dziecka Kangurek łączymy naukę z zabawą, pomagając w ten sposób dzieciom, które przeżywają trudności rozwojowe, edukacyjne, związane z integracją zmysłów, z koordynacją wzrokowo-ruchową. Kangurek zaprasza do wyboru szerokiego zakresu terapii i pomocy rozwojowej dla Twojego dziecka.';

const Home: NextPage = () => {
	const router = useRouter();
	const [screenWidth, setScreenWidth] = useState<number>(0);
	const { width }: WindowSize = useWindowSize();

	useEffect(() => {
		if (width) setScreenWidth(width);
	}, [width]);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content='integracja sensoryczna, si, centrum-kangurek'
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

			<header className='h-auto w-full'>
				{screenWidth > 760 ? (
					<Image
						src={headerImg}
						alt='Integracja Sensoryczna okładka'
						priority
					/>
				) : (
					<Image
						src={headerImgMobile}
						alt='Integracja Sensoryczna okładka'
						priority
					/>
				)}
				<h3 className='my-4 mr-[5%] text-right text-lg font-bold text-[#667]'>
					„Czego nie ma najpierw w zmysłach, tego nie ma później w
					umyśle” <br />
					~B. Pasca
				</h3>
			</header>

			<PageContent>
				<section className='my-7 flex w-11/12 flex-col items-start gap-5 md:my-12 md:w-8/12'>
					<h1 className='text-4xl'>O nas</h1>
					<p className='text-lg'>
						W CENTRUM TERAPII I ROZWOJU DZIECKA KANGUREK łączymy
						naukę z zabawą, pomagając w ten sposób dzieciom, które
						przeżywają trudności rozwojowe, edukacyjne, związane z
						integracją zmysłów, z koordynacją wzrokowo-ruchową.
					</p>
					<div className='flex flex-col gap-5 md:flex-row lg:gap-7'>
						<div className='order-2 flex flex-col gap-4 md:order-1 md:w-1/2 lg:gap-7'>
							<p className='text-left text-lg'>
								Naszą ofertę kierujemy do dzieci:
							</p>
							<ul className='list-inside list-disc'>
								<li>z zaburzeniami integracji sensorycznej</li>

								<li>z zaburzeniami mowy, słuchu, wzroku</li>

								<li>
									z problemami szkolnymi (koncentracją,
									czytaniem, pisaniem, liczeniem)
								</li>

								<li>z zaburzoną koordynacją ruchową</li>

								<li>z nadpobudliwością psychoruchową</li>
							</ul>

							<p>
								Bazując na naszym sporym doświadczeniu w pracy z
								dziećmi prowadzimy również szkolenia i warsztaty
								dla nauczycieli i rodziców.
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
						<div className='order-1 flex items-center justify-center md:order-2 md:w-1/2'>
							<Image
								src={lapki}
								alt='Integracja Sensoryczna w praktyce'
							/>
						</div>
					</div>

					<iframe
						src='https://www.youtube.com/embed/P6esjoeunP0'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						className='-mb-12 aspect-video w-full max-w-[900px] self-center'></iframe>
				</section>

				<section
					id='oferta'
					className='flex w-full justify-center pt-12 md:w-11/12'>
					<Offer />
				</section>

				<section className='w-11/12'>
					<Kontakt />
				</section>
			</PageContent>
		</>
	);
};

export default Home;
