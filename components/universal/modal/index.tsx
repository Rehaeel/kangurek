import ReactDOM from 'react-dom';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = (props) => {
	const { children, isOpen, setIsOpen } = props;
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className='fixed top-0 left-0 h-screen w-screen bg-gray-900/80 z-50'>
			<div className='relative w-full h-full flex justify-center items-center'>
				<p
					onClick={() => setIsOpen(false)}
					className='absolute text-white text-2xl right-5 top-5 cursor-pointer py-2 px-4 bg-gray-700/50 rounded-lg z-20'>
					X
				</p>
				{children}
			</div>
		</div>,
		document.body
	);
};

export default Modal;
