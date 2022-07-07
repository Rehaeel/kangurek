const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD,
	PHASE_PRODUCTION_SERVER,
	PHASE_EXPORT,
} = require('next/constants');

/** @type {import('next').NextConfig} */

module.exports = (phase) => {
	if (
		phase === PHASE_PRODUCTION_BUILD ||
		PHASE_PRODUCTION_SERVER ||
		PHASE_DEVELOPMENT_SERVER
	) {
		return {
			reactStrictMode: true,
			env: {
				phase: 'build',
			},
		};
	} else if (phase === PHASE_EXPORT) {
		return {
			reactStrictMode: true,
			env: {
				phase: 'export',
			},
		};
	}
	return { reactStrictMode: true };
};
