import { promises as fsPromise, existsSync } from "fs";

async function generateFolder(folderPath: string): Promise<boolean> {
	try {
		if (existsSync(`${process.cwd()}/${folderPath}`)) {
			return process.exit(1);
		}
		await fsPromise.mkdir(`${process.cwd()}/${folderPath}`);
		return true;
	} catch (error) {
		return false;
	}
}

export default generateFolder;
