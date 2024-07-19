import Image from 'next/image';
import Link from 'next/link';
import { offerList } from './offer-list';

const Offer: React.FC = () => {
	return (
		<div className='relative grid w-fit max-w-full grid-cols-2 grid-rows-4 justify-center overflow-hidden md:grid-cols-4 md:grid-rows-2'>
			{offerList.map((offer) => {
				const { description, href, image } = offer;
				return (
					<Link href={href} key={image} prefetch>
						<div className='group relative mx-[5%] my-[2%] max-w-[260px] overflow-hidden'>
							<Image
								src={image}
								alt={href.slice(1)}
								width={260}
								height={320}
							/>
							<div className='absolute -top-[103%] left-0 flex h-full w-full items-center justify-center border border-black/25 bg-white px-5 py-2 text-sm text-[#333] no-underline opacity-0 transition-all duration-300 group-hover:top-0 group-hover:opacity-100 md:text-base'>
								<p>{description}</p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Offer;
