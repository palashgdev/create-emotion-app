import { promises } from "fs";
import inquirer from "inquirer";

const createPackageJson = async (projectName: string): Promise<boolean> => {
	try {
		const data = await inquirer.prompt([
			{
				name: "name",
				message: "What is the project name",
				default: projectName,
			},
			{
				name: "version",
				message: "What is package version ?",
				default: "0.0.1",
			},
			{
				name: "description",
				message: "Project Description ?",
				default: null,
			},
			{
				name: "license",
				message: "What is the project license?",
				default: "MIT",
			},
		]);

		await promises.writeFile(
			`${process.cwd()}/${projectName}/package.json`,
			JSON.stringify(data, null, 2)
		);

		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};

export default createPackageJson;
