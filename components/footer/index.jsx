const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='bg-gray-900 flex justify-center flex-col items-center py-4 gap-2 sm:flex-row sm:py-7 sm:gap-7 md:gap-12'>
			<p className='text-gray-500 text-sm sm:text-base md:text-lg'>
				Centrum Kangurek © 2017-{currentYear}
			</p>
			<p className='text-gray-500 text-sm  sm:text-base md:text-lg'>
				Powered by{' '}
				<a
					href='https://www.facebook.com/profile.php?id=100001098131095'
					target='_blank'>
					Rafał Prokopiak
				</a>
			</p>
		</footer>
	);
};

export default Footer;
