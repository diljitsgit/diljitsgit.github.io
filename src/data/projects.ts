export interface Project {
  title: string;
  description: string;
  /** Thumbnail URL (hosted on Cloudflare R2). */
  image: string;
  tags: string[];
  link: string;
}

const thumbnails =
  "https://pub-fae56afbfe534541a6d5a0e3219b439e.r2.dev/project-thumbnails";

/** Shown on the home page in this order. Put the newest first. */
const projects: Project[] = [
  {
    title: "3D Renders",
    description:
      "Three years of Blender work in one gallery: cars, furniture, sculpts and challenge entries.",
    image:
      "https://pub-fae56afbfe534541a6d5a0e3219b439e.r2.dev/3d-renders/Supra-Render.png",
    tags: ["Blender", "Photoshop"],
    link: "/renders",
  },
  {
    title: "WEATHR",
    description:
      "A minimal weather app built with React on top of a live weather API.",
    image: `${thumbnails}/WEATHR.png`,
    tags: ["React", "API"],
    link: "https://www.diljits.com/weathr",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A minimal Tic Tac Toe made from scratch with plain DOM manipulation.",
    image: `${thumbnails}/TicTacToe.png`,
    tags: ["HTML", "CSS", "JS"],
    link: "https://www.diljits.com/Game-collection/tictactoe.html",
  },
  {
    title: "Quiz App",
    description:
      "A friendly quiz app packed with questions from all over the tech space.",
    image: `${thumbnails}/QuizApp.png`,
    tags: ["HTML", "CSS", "JS"],
    link: "https://www.diljits.com/Quiz-App/index.html",
  },
];

export default projects;
