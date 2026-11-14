/**
 * Site-wide settings. Change names, links and navigation here;
 * every page and component reads from this file.
 */
export const site = {
  name: "Diljit Singh",
  title: "Diljit Singh · Frontend developer",
  description:
    "Diljit Singh is a frontend developer with a design and 3D background. Projects, 3D renders and writing about building for the web.",
  contact: "https://cal.com/diljits",
  nav: [
    { label: "about", href: "/#about" },
    { label: "projects", href: "/#projects" },
    { label: "blog", href: "/blog" },
  ],
  socials: [
    { label: "github", href: "https://github.com/diljitsgit" },
    { label: "twitter", href: "https://twitter.com/game_daas" },
    { label: "rss", href: "/rss.xml" },
  ],
} as const;
