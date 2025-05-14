import Image from 'next/image';
import Head from 'next/head';
import { FC } from 'react';
import { PageWrapperProps } from './types';

const PageWrapper: FC<PageWrapperProps> = ({ title, image, children }) => {
	return (
		<>
		{title && image && (
			<Head>
				{/* Preload the image provided to PageWrapper */}
				<link
					rel="preload"
					href={image}
					as="image"
					type="image/jpeg"
					fetchPriority="high"
				/>
			</Head>
		)}
		<main>
			{title && image && (
				<header className='relative flex h-60 w-full flex-col items-center justify-center sm:h-72 md:h-80'>
					<h1 className='header-color z-10 text-center text-6xl font-bold uppercase'>
						{title}
					</h1>
					<Image
						priority
						alt='okładka strony'
						src={image}
						fill
						sizes="(max-width: 768px) 100vw, 1200px"
						quality={85}
						unoptimized
						style={{ objectFit: 'cover' }}
					/>
				</header>
			)}
			<section className='mx-auto my-6 flex w-[95%] flex-col items-start gap-8 md:my-10 md:w-10/12 lg:w-9/12'>
				{children}
			</section>
		</main>
		</>
	);
};

export default PageWrapper;
