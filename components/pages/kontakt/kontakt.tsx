import Image from 'next/image';
import Link from 'next/link';
import telephone from '../../../public/images/pages/kontakt/tel.svg';
import mail from '../../../public/images/pages/kontakt/mail.svg';
import pin from '../../../public/images/pages/kontakt/map.svg';
import PageContent from '../../universal/page-content';

const Kontakt: React.FC = () => {
	const bankAccountNumber = '11 1090 1072 0000 0001 3749 9362';

	return (
		<PageContent>
			<div className='md: flex w-full flex-col items-center gap-12 md:flex-row md:gap-2 lg:gap-5'>
				<div className='flex min-w-fit flex-col items-center gap-5 md:w-1/2'>
					<h3 className='mb-8 text-3xl text-orange-color'>
						Dane kontaktowe
					</h3>
					<p>
						tel.: <Link href='tel:+48505776121'>505-776-121</Link> i{' '}
						<Link href='tel:+48600216870'>600-216-870</Link>
					</p>
					<Link href='tel:+48505776121'>
						<Image
							src={telephone}
							alt='telefon'
							width={80}
							height={80}
							unoptimized
							sizes='80px'
							quality={90}
							className='cursor-pointer'
						/>
					</Link>
					<p>
						Mail:{' '}
						<Link href='mailto:info@centrum-kangurek.pl'>
							info@centrum-kangurek.pl
						</Link>
					</p>
					<Link href='mailto:info@centrum-kangurek.pl'>
						<Image
							src={mail}
							alt='mail'
							width={80}
							height={80}
							unoptimized
							sizes='80px'
							quality={90}
							className='cursor-pointer'
						/>
					</Link>
					<p className='text-center'>
						<Link href='https://www.google.pl/maps/place/Centrum+Kangurek/@53.1317883,18.0174391,15z/data=!4m8!1m2!2m1!1scentrum+kangurek!3m4!1s0x470313e4298cd6bd:0x26e0e0577a21e6d9!8m2!3d53.139576!4d18.0299779'>
							ul. Czerkaska 11 lok.2A (piętro), <br />
							85-637 Bydgoszcz
						</Link>
					</p>
					<Link href='https://www.google.pl/maps/place/Centrum+Kangurek/@53.1317883,18.0174391,15z/data=!4m8!1m2!2m1!1scentrum+kangurek!3m4!1s0x470313e4298cd6bd:0x26e0e0577a21e6d9!8m2!3d53.139576!4d18.0299779'>
						<Image
							src={pin}
							alt='adress'
							width={80}
							height={80}
							unoptimized
							sizes='80px'
							quality={90}
							className='cursor-pointer'
						/>
					</Link>
				</div>
				<div className='relative flex h-[450px] w-full items-center justify-center'>
					<iframe
						title='google maps'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.363019917443!2d18.027789215925466!3d53.139579197879456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313e4298cd6bd%3A0x26e0e0577a21e6d9!2sCentrum%20Kangurek%20-%20Integracja%20sensoryczna%20%7C%20Rehabilitacja%20%7C%20Terapia%20%7C%20Logopedia!5e0!3m2!1spl!2spl!4v1632430001690!5m2!1spl!2spl'
						width='100%'
						height='450'
						allowFullScreen={true}
					/>
				</div>
			</div>
			<div className='mt-10 flex w-full items-center justify-around md:justify-center md:gap-7'>
				<Image
					src='/images/pages/kontakt/Konto-bankowe.jpg'
					alt='number konta bankowego'
					width={100}
					height={150}
					unoptimized
					sizes='100px'
					quality={85}
				/>
				<div className='text-right text-xl font-bold md:flex md:gap-3'>
					<p>
						<strong className='text-right font-extrabold'>
							Konto bankowe{' '}
							<span className='text-orange-color'>
								Kangurka:{' '}
							</span>
						</strong>{' '}
					</p>
					<p className='font-thin'>{bankAccountNumber}</p>
				</div>
			</div>
		</PageContent>
	);
};

export default Kontakt;
