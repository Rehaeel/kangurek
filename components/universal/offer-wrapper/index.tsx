import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Props } from './types';

const OfferWrapper: React.FC<Props> = ({ title, image, children }) => {
	const router = useRouter();
	const siteName = router.pathname.slice(1).replace('-', ' ');

	return (
		<>
		<Head>
			{/* Preload the image provided to OfferWrapper */}
			<link
				rel="preload"
				href={image}
				as="image"
				type="image/jpeg"
				fetchPriority="high"
			/>
		</Head>
		<main>
			<header className='relative flex h-64 w-full flex-col items-center justify-center sm:h-72 md:h-96'>
				<h1 className='header-color offer-wrapper-header-shadow z-10 text-center text-3xl font-extralight  uppercase md:text-4xl lg:text-6xl lg:font-bold'>
					{title}
				</h1>
				<Image
					alt={`okładka strony - ${siteName}`}
					src={image}
					fill
					sizes="(max-width: 768px) 100vw, 1200px"
					quality={85}
					style={{
						objectFit: 'cover',
						objectPosition: 'center'
					}}
					priority
					unoptimized
				/>
			</header>
			<div className='mx-auto my-11 flex w-11/12 flex-col items-start gap-8 sm:w-10/12 md:w-9/12'>
				{children}
			</div>
		</main>
		</>
	);
};

export default OfferWrapper;
