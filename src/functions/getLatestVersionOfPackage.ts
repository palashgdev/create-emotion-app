import fetch from "node-fetch";
import { PackageVersion, PackageInfo } from "../types";

const parsePackageVersion = (version: string[]): string => {
	const filteredVersion = Object.keys(version).filter((version) =>
		/^([0-9]+)\.([0-9]+)\.([0-9]+)$/.test(version)
	);

	return String(filteredVersion[filteredVersion.length - 1]);
};

const getLatestVersion = async (
	packageName: string
): Promise<PackageVersion | null> => {
	try {
		const response = await fetch(`https://registry.npmjs.org/${packageName}`, {
			headers: {
				// package.json module
				Accept: "application/vnd.npm.install-v1+json",
			},
		});

		const { versions }: PackageInfo = await response.json();

		return parsePackageVersion(versions);
	} catch (error) {
		console.log(error);
		return null;
	}
};

export default getLatestVersion;
