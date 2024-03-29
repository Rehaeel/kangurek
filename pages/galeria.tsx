import { NextPage } from 'next';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import PageContent from '../components/universal/page-content';
import { getGaleriaImgFiles } from '../utils/helpers-functions';
import Modal from '../components/universal/modal';
import Head from 'next/head';
import { DOMAIN_NAME } from '../utils/constants';
import { useRouter } from 'next/router';

const title: string = 'Galeria';
const description: string =
	'Galeria zdjęć z zajęć z dziećmi. Spójrz czego możesz się spodziewać.';

const Galeria: NextPage<{ photos: string[] }> = (props) => {
	const router = useRouter();
	const [photoNumber, setPhotoNumber] = useState(0);
	const [showPhoto, setShowPhoto] = useState(false);

	const subtractOne = useCallback(
		() =>
			setPhotoNumber((prevNum) => {
				if (prevNum === 0) return props.photos.length - 1;
				return prevNum - 1;
			}),
		[props.photos.length]
	);

	const addOne = useCallback(() => {
		setPhotoNumber((prevNum) => {
			if (prevNum === props.photos.length - 1) return 0;
			return prevNum + 1;
		});
	}, [props.photos.length]);

	useEffect(() => {
		const keyFuncHandler = (event: KeyboardEvent): void => {
			if (event.key === 'ArrowLeft') subtractOne();
			if (event.key === 'ArrowRight') addOne();
			if (event.key === 'Escape') setShowPhoto(false);
		};
		// TODO: useEffect goes every 2x images
		document?.addEventListener('keydown', keyFuncHandler);

		() => document?.removeEventListener('keydown', keyFuncHandler);
	}, [subtractOne, addOne]);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta
					name='keywords'
					content='galeria, integracja sensoryczna, centrum-kangurek'
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

			<PageContent>
				<h2 className='text-4xl'>Galeria</h2>
				<div className='flex flex-wrap gap-[2px]'>
					{props.photos.map((photo: string, i: number) => (
						<div
							key={i}
							className='relative h-72 w-80 grow cursor-pointer'
							onClick={() => {
								setShowPhoto(true);
								setPhotoNumber(i);
							}}>
							<Image
								priority={i < 20}
								alt='zdjęcie galerii'
								src={`/images/pages/galeria/${photo}`}
								layout='fill'
								objectFit='cover'
							/>
						</div>
					))}
				</div>
				{showPhoto && (
					<Modal isOpen={showPhoto} setIsOpen={setShowPhoto}>
						<>
							<p
								onClick={subtractOne}
								className='absolute left-0 z-30 animate-pulse cursor-pointer rounded-lg bg-gray-700/50 py-0 px-3 text-5xl text-white transition-all duration-300 hover:scale-110 md:left-5'>
								{'<'}
							</p>
							<div className='relative z-20 h-[80%] w-[95%] md:w-[80%]'>
								<Image
									src={`/images/pages/galeria/${props.photos[photoNumber]}`}
									alt='zdjęcie podglądu'
									layout='fill'
									objectFit='contain'
								/>
							</div>

							<p
								onClick={addOne}
								className='absolute right-0 z-30 animate-pulse cursor-pointer rounded-lg bg-gray-700/50 py-0 px-3 text-5xl text-white transition-all duration-300 hover:scale-110 md:right-5'>
								{'>'}
							</p>
						</>
					</Modal>
				)}
			</PageContent>
		</>
	);
};

export const getStaticProps = () => {
	return {
		props: { photos: getGaleriaImgFiles() },
	};
};

export default Galeria;
