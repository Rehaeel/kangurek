import { NextPage } from 'next';
import path from 'path';
import { terapeuciList } from '../../components/pages/terapeuci/terapeuci-list';
import { TerapeuciProps } from './types';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { useState } from 'react';
import PageContent from '../../components/universal/page-content';

const TerapeuciPage: NextPage<TerapeuciProps> = (props) => {
	const { terapeuci } = props;
	const [tabMaxHeight, setTabMaxHeight] = useState<number | null>(null);
	const [tabOpacity, setTabOpacity] = useState<number | null>(null);
	const [showMore, setShowMore] = useState<number | null>(null);

	const showMoreClick = (index: number) => {
		if (showMore !== index) {
			setShowMore(index);
			setTabMaxHeight(index);
			setTabOpacity(index);
		} else {
			setShowMore(null);
			setTabMaxHeight(null);
			setTabOpacity(null);
		}
	};

	const breakpointColumnsObj = {
		default: 3,
		980: 2,
		765: 1,
	};

	return (
		<PageContent>
			<h1 className='mt-6 font-bold md:mt-8'>Terapeuci</h1>
			<Masonry
				className='-ml-[30px] flex w-auto'
				columnClassName='pl-0 sm:ml-[30px] bg-clip-padding'
				breakpointCols={breakpointColumnsObj}>
				{terapeuci.map((terapeuta, index) => {
					console.log(terapeuta.image);
					return (
						<div
							key={index}
							className='relative mb-[30px] flex h-fit w-full max-w-[500px] flex-col items-center gap-5 rounded-[50px] border-2 border-[#c6c6c6] bg-[#fcfcfc] p-[20px] text-left sm:p-[30px]'>
							<Image
								priority
								src={terapeuta.image}
								alt={`${terapeuta.name}-terapeuta`}
								width={150}
								height={150}
								className='rounded-full'
							/>
							<h3 className='my-5 text-2xl font-extrabold'>
								{terapeuta.name}
							</h3>
							<ul className='list-outside list-disc self-start pl-[30px] text-lg font-light leading-7'>
								{terapeuta.education.map(
									(educationList, index) => {
										return (
											<li key={index}>{educationList}</li>
										);
									}
								)}
							</ul>
							<div
								style={{
									maxHeight:
										tabMaxHeight === index ? 5000 : 0,
									opacity: tabOpacity === index ? 1 : 0,
									transition: 'max-height 0.5s ease',
								}}
								className='flex flex-col gap-4 overflow-hidden transition-all duration-500'>
								<h4 className='text-xl font-extrabold underline'>
									DOŚWIADCZENIE ZAWODOWE
								</h4>
								{terapeuta.experience.map((e, i) => (
									<p key={i} className='text-lg font-thin'>
										{e}
									</p>
								))}
							</div>
							<p
								onClick={() => showMoreClick(index)}
								className='z-10 cursor-pointer text-orange-color hover:underline'>
								{showMore === index
									? 'Zobacz mniej ...'
									: 'Zobacz więcej ...'}
							</p>
						</div>
					);
				})}
			</Masonry>
		</PageContent>
	);
};

export const getStaticProps = () => {
	const terapeuci = terapeuciList.map((terapeuta) => ({
		...terapeuta,
		image: `/images/pages/terapeuci/${terapeuta.image}.jpg`,
	}));

	return { props: { terapeuci: JSON.parse(JSON.stringify(terapeuci)) } };
};

export default TerapeuciPage;
