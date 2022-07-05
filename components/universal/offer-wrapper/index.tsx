import Image from 'next/image';
import { Props } from './types';

const OfferWrapper: React.FC<Props> = ({ title, image, children }) => {
	return (
		<main>
			<header className='relative flex h-64 w-full flex-col items-center justify-center sm:h-72 md:h-96'>
				<h1 className='header-color offer-wrapper-header-shadow z-10 text-center text-3xl font-extralight  uppercase md:text-4xl lg:text-6xl lg:font-bold'>
					{title}
				</h1>
				<Image priority src={image} layout='fill' objectFit='cover' />
			</header>
			<div className='my-11 mx-auto flex w-11/12 flex-col items-start gap-8 sm:w-10/12 md:w-9/12'>
				{children}
			</div>
		</main>
	);
};

export default OfferWrapper;
