import React, { FC } from 'react';
import { Props } from './types';

const PageContent: FC<Props> = ({ children, className }) => {
	return (
		<div
			className={`my-6 flex w-full flex-col items-center gap-10 md:my-8 ${className}`}>
			{children}
		</div>
	);
};

export default PageContent;
