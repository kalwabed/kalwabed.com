export function getProjectCover(imgPath: string) {
	if (!imgPath) {
		throw new Error("imgPath is not found!");
	}

	const projectAssetsFolder = "/src/assets/projects";
	const images = import.meta.glob<{ default: ImageMetadata }>(
		"/src/assets/projects/*.{jpeg,jpg,png,gif}",
	);
	const projectCover = images[`${projectAssetsFolder}/${imgPath}`];

	if (!projectCover) {
		throw new Error(
			`"${imgPath} does not exist in glob: "${projectAssetsFolder}/*.{jpeg,jpg,png,gif}"`,
		);
	}

	return projectCover;
}
