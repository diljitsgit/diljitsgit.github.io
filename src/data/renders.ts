const bucket = "https://pub-fae56afbfe534541a6d5a0e3219b439e.r2.dev/3d-renders";

/** File names in the R2 bucket. Add a file name here to show a new render. */
const files = [
  "Bleek-JDM-car.png",
  "CG-Boost-Challenge.webp",
  "Chair.webp",
  "Corvet-Render.png",
  "Daimer-Render.jpg",
  "Daytona-Car-Render.png",
  "Encore-table.webp",
  "Horse-Sculpt.png",
  "Music-Vis.png",
  "Old-Car-Redner.jpg",
  "RDR2-Concept.png",
  "Small-Worlds-Challege.jpg",
  "Sofa-Enviornment-1.png",
  "Sofa-Enviornment-2.png",
  "Supra-Render.png",
  "Table-render.png",
];

/** "Sofa-Enviornment-1.png" -> "Sofa Enviornment 1" */
function titleFromFile(file: string) {
  return file.replace(/\.\w+$/, "").replaceAll("-", " ");
}

const renders = files.map((file) => ({
  src: `${bucket}/${file}`,
  alt: `3D render: ${titleFromFile(file)}`,
}));

export default renders;
