import { NextPage } from 'next';
import path from 'path';
import { terapeuciList } from './terapeuci-list';
import { TerapeuciProps } from './types';

const TerapeuciPage: NextPage<TerapeuciProps> = (props) => {
	const { terapeuci } = props;
	return (
		<>
			{/* {terapeuci.map((terapeuta) => {
				return <div>{terapeuta.name}</div>;
			})} */}
		</>
	);
};

// export const getStaticProps = () => {
// 	const terapeuciImgsPath: string = path.join(
// 		process.cwd(),
// 		'images',
// 		'pages',
// 		'terapeuci'
// 	);

// 	const terapeuciImgsDevPath: string = path.join(
// 		process.cwd(),
// 		'public',
// 		'images',
// 		'pages',
// 		'terapeuci'
// 	);

// 	console.log(terapeuciList)

// 	return { props: {  } };
// };

export default TerapeuciPage;
