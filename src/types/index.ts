export type PackageName = string;
export type PackageVersion = string;

export interface PackageVersions {
	[key: string]: {
		name: PackageName;
		version: PackageVersions;
	};
}

export interface PackageInfo {
	versions: PackageVersion[];
}

export interface RequiredPackageItem {
	name: string;
}

export interface RequiredPackages {
	dependencies: RequiredPackageItem[];
	devDependencies: RequiredPackageItem[];
}
