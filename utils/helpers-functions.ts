import fs from 'fs';
import path from 'path';

const galeriaImgsPath: string = path.join(
	process.cwd(),
	'images',
	'pages',
	'galeria'
);

const galeriaImgsDevPath: string = path.join(
	process.cwd(),
	'public',
	'images',
	'pages',
	'galeria'
);

export const getGaleriaImgFiles = (): string[] => {
	return fs.readdirSync(galeriaImgsDevPath ?? galeriaImgsPath);
};
