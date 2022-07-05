import Footer from '../footer';
import Menu from '../menu';
import { LayerProps } from './types';

const Layer: React.FC<LayerProps> = (props) => {
	const { children } = props;
	return (
		<>
			<Menu />
			{children}
			<Footer />
		</>
	);
};

export default Layer;
