import { useRouter } from 'next/router';
import { FC } from 'react';
import { Props } from './types';

const Button: FC<Props> = ({ children, href, onClick }) => {
	const router = useRouter();

	return (
		<button
			onClick={() => {
				if(onClick) onClick();
				router.push(href)
			}}
			className='group py-4 px-6 bg-orange-color rounded-xl text-white text-2xl relative flex pr-6 transition-all duration-500 last:hover:pr-12'>
			{children}
			<p className='absolute right-4 text-4xl top-3 opacity-0 transition-all duration-500 group-hover:opacity-100'>
				{'>'}
			</p>
		</button>
	);
};

export default Button;
