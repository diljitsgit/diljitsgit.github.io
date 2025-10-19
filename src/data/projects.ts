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
    title: "Portfolio Website",
    description: "My main portfolio built with Astro + React + MDX",
    image: "https://your-r2-bucket-url/portfolio.jpg",
    slug: "portfolio-website",
    tags: ["Astro", "React", "MDX"],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Blog Platform",
    description: "A minimal blog using Astro + MDX",
    image: "https://your-r2-bucket-url/blog.jpg",
    slug: "blog-platform",
    tags: ["Astro", "MDX", "Blog"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A minimal blog using Astro + MDX",
    image: "https://your-r2-bucket-url/blog.jpg",
    slug: "blog-platform",
    tags: ["Astro", "MDX", "Blog"],
    link: "#",
  },
];

export default projects;
