import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import logo from '../../public/images/home.png';
import { menuList, offerList } from './menu-items-list';

const Menu: NextPage = () => {
	const { pathname: route } = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const [isOfertaMenuOpen, setIsOfertaMenuOpen] = useState(false);
	const [isKlubOpen, setIsKlubOpen] = useState(false);

	return (
		<menu
			className={`${isOpen ? 'fixed pt-16' : 'sticky'} h-${
				isOpen ? 'screen' : '12'
			} top-0 z-50  flex w-full  items-center bg-orange-color  md:pt-0 lg:px-[10%]`}>
			<Link href='/'>
				<a
					onClick={() => setIsOpen(false)}
					className='absolute top-3 left-5 max-w-[30px] md:relative md:top-0 md:left-0'>
					<Image src={logo} priority />
				</a>
			</Link>

			{isOpen ? (
				<a
					onClick={() => setIsOpen(false)}
					className={`absolute right-5 top-5 cursor-pointer text-3xl text-white md:hidden`}>
					X
				</a>
			) : (
				<a
					onClick={() => setIsOpen(true)}
					className='absolute right-5 -top-1 cursor-pointer text-5xl font-thin text-white md:hidden'>
					☰
				</a>
			)}

			<nav
				className={`${
					isOpen ? 'opened-menu' : 'hidden'
				} top-0 h-full w-full flex-row overflow-y-auto bg-orange-color text-white transition-all duration-1000 md:flex md:h-full md:items-center md:justify-end md:bg-transparent`}>
				<Link
					href='https://www.facebook.com/centrumkangurek/'
					prefetch={false}>
					<a
						onClick={() => setIsOpen(false)}
						target='_blank'
						className={`flex h-12 items-center bg-orange-darker-color px-6 hover:bg-orange-lighter-color md:h-full md:bg-transparent`}>
						<div className='whitespace-nowrap'>Wydarzenia [FB]</div>
					</a>
				</Link>

				<div
					onMouseEnter={() => setIsOfertaMenuOpen(true)}
					onMouseLeave={() => setIsOfertaMenuOpen(false)}
					className={`items-center md:flex md:h-full md:bg-transparent md:hover:bg-orange-lighter-color`}>
					<Link href='/#oferta' prefetch={false}>
						<a
							onClick={() => setIsOpen(false)}
							className='flex h-12 items-center whitespace-nowrap px-6 hover:bg-orange-lighter-color'>
							<div className=''>
								Oferta
								<span className='hidden text-xl md:inline'>
									&nbsp;&nbsp;&nbsp;v
								</span>
							</div>
						</a>
					</Link>
					<div
						className={`${
							isOfertaMenuOpen ? 'md:top-12' : 'md:-top-[380px]'
						} ${
							isOfertaMenuOpen
								? 'md:opacity-100'
								: ' md:opacity-0'
						} md:absolute md:-z-10 md:h-fit md:flex-col md:border-t md:border-orange-darker-color md:bg-orange-color/95  md:transition-all md:duration-300`}>
						{offerList.map((menuItem, i) => {
							return (
								<Link
									href={menuItem.pathName}
									key={menuItem.name}>
									<a
										onClick={() => {
											setIsOpen(false);
											setIsOfertaMenuOpen(false);
										}}
										onMouseEnter={() =>
											i === 0 || i === 1
												? setIsKlubOpen(true)
												: null
										}
										onMouseLeave={() =>
											i === 0 || i === 1
												? setIsKlubOpen(false)
												: null
										}
										className={`${
											route === menuItem.pathName
												? 'active-page'
												: 'odd:bg-orange-darker-color md:odd:bg-transparent'
										} ${
											i === 1 && !isKlubOpen
												? 'md:-pl-6 md:max-h-0 md:opacity-0'
												: ''
										}${
											i === 1 && isKlubOpen
												? 'md:max-h-12 md:pl-8 md:opacity-100'
												: ''
										}  flex h-12 items-center overflow-hidden px-6 transition-all duration-300  hover:bg-orange-lighter-color md:hover:bg-orange-lighter-color`}>
										<div className='whitespace-nowrap text-lg md:text-base'>
											{menuItem.name}
											{i === 0 && (
												<span className='hidden text-xl md:inline'>
													&nbsp;&nbsp;&nbsp;v
												</span>
											)}
										</div>
									</a>
								</Link>
							);
						})}
					</div>
				</div>

				{menuList.map((menuItem) => {
					return (
						<Link href={menuItem.pathName} key={menuItem.name}>
							<a
								onClick={() => setIsOpen(false)}
								className={`${
									route === menuItem.pathName
										? 'active-page'
										: 'even:bg-orange-darker-color md:even:bg-transparent'
								} flex h-12 items-center px-6  hover:bg-orange-lighter-color md:h-full md:hover:bg-orange-lighter-color`}>
								<div className='whitespace-nowrap text-lg md:text-base'>
									{menuItem.name}
								</div>
							</a>
						</Link>
					);
				})}
			</nav>
		</menu>
	);
};

export default Menu;
