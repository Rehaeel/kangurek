import React from 'react';

export interface ModalProps {
	children: JSX.Element | JSX.Element[];
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
