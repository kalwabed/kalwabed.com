export function getDynamicImage(imgPath: string) {
  if (!imgPath) {
    throw new Error("imgPath is not found!");
  }

  const localAssetsFolder = "/src/assets";
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/**/*.{jpeg,jpg,png,gif}",
  );
  const image = images[`${localAssetsFolder}${imgPath}`];

  if (!image) {
    throw new Error(
      `"${imgPath} does not exist in glob: "${localAssetsFolder}/*.{jpeg,jpg,png,gif}"`,
    );
  }

  return image;
}
