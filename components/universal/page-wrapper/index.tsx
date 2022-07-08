import Image from 'next/image';
import { FC } from 'react';
import { PageWrapperProps } from './types';

const PageWrapper: FC<PageWrapperProps> = ({ title, image, children }) => {
	return (
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
						layout='fill'
						objectFit='cover'
						width={1920}
						height={320}
						loading='eager'
					/>
				</header>
			)}
			<section className='my-6 mx-auto flex w-[95%] flex-col items-start gap-8 md:my-10 md:w-10/12 lg:w-9/12'>
				{children}
			</section>
		</main>
	);
};

export default PageWrapper;
