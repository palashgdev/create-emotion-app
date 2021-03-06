import { RequiredPackages } from "../types";

const getPackages = (): RequiredPackages => {
	const devDependencies = [
		"@types/compression",
		"@types/express",
		"@types/cors",
		"@types/emotion__core",

		"nodemon",

		"eslint",
		"prettier",
		"eslint-config-airbnb-base",
		"eslint-config-prettier",
		"eslint-plugin-import",
		"eslint-plugin-prettier",

		"husky",
		"lint-staged",

		"typescript",
		"ts-node",
	];

	const dependencies = [
		"compression",
		"express",
		"cors",
		"@emotion/core",
		"@emotion/react",
	];

	return {
		dependencies: dependencies.map((dependency) => ({
			name: dependency,
		})),
		devDependencies: devDependencies.map((dependency) => ({
			name: dependency,
		})),
	};
};

export default getPackages;
