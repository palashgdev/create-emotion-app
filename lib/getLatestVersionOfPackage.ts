import packageJson from "package-json";
import { PackageVersion } from "../src/types";

const getLatestVersion = async (name: string): Promise<PackageVersion> => {
	const response = await packageJson(name.toLowerCase());
	return response.version as string;
};

export default getLatestVersion;
