export interface Project {
  title: string;
  description: string;
  image: string; // Cloudflare R2 public URL
  slug: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Quiz App",
    description: "A user friendly Quiz App riddled with questions all over the tech space!",
    image: "https://pub-fae56afbfe534541a6d5a0e3219b439e.r2.dev/project-thumbnails/QuizApp.png",
    slug: "quiz-app",
    tags: ["HTML", "CSS", "JS"],
    link: "https://www.diljits.com/Quiz-App/index.html",
  },
  {
    title: "Tic Tac Toe",
    description: "A simple yet minimalistic TicTacToe app made completely from scratch using simple DOM manipulations",
    image: "https://pub-fae56afbfe534541a6d5a0e3219b439e.r2.dev/project-thumbnails/TicTacToe.png",
    slug: "Tic-Tac-Toe",
    tags: ["HTML", "CSS", "JS"],
    link: "https://www.diljits.com/Game-collection/tictactoe.html",
  },
  {
    title: "WEATHR",
    description: "A minimap weather app built using React to demonstrate weather integration.",
    image: "https://pub-fae56afbfe534541a6d5a0e3219b439e.r2.dev/project-thumbnails/WEATHR.png",
    slug: "weather-app",
    tags: ["React", "API"],
    link: "https://www.diljits.com/weathr",
  },
  {
    title: "3D Renders",
    description: "This includes all of my 3D renders made in the past 3 years, showcasing all i have learnt in the 3D industry throughout the years",
    image: "https://pub-fae56afbfe534541a6d5a0e3219b439e.r2.dev/3d-renders/Supra-Render.png",
    slug: "3d-renders",
    tags: ["Blender", "PhotoShop"],
    link: "/renders",
  },
];

export default projects;
