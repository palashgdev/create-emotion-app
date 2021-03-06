import packageJson from "@app/package.json";

const getVersion = (): string => {
	return packageJson.version;
};

export default getVersion;
