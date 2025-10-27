import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogPostCard from "./BlogPostCard.tsx";

interface BlogFrontMatter {
    title: string;
    date: string;
    tags?: string[];
}

interface BlogPost {
    slug: string;
    frontmatter: BlogFrontMatter;
    excerpt: string;
    readingTime: string;
}

export default function Blogs() {
    const blogDir = path.resolve("./src/content/blog");
    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

    function calcReadingTime(content: string) {
        const words = content.split(/\s+/).length;
        const minutes = Math.ceil(words / 200); // 200 wpm avg
        return `${minutes} min read`;
    }

    const posts: BlogPost[] = files
        .map((file) => {
            const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
            const { data, content } = matter(raw);
            const excerpt = content.split("\n")?.slice(0, 150).toString() ?? "";
            const readingTime = calcReadingTime(content);

            return {
                slug: file.replace(/\.mdx$/, ""),
                frontmatter: data as BlogFrontMatter,
                excerpt,
                readingTime,
            };
        })
        .sort(
            (a, b) =>
                new Date(b.frontmatter.date).getTime() -
                new Date(a.frontmatter.date).getTime()
        );

    return (
        <section className=" border-outline">
            <div className="border-darkOutline bg-darkBackground border-x lg:mx-48 md:mx-16 m-0 gap-4 flex items-center justify-between md:py-12 py-6 lg:px-32 md:px-12 px-4">
                <div className="flex flex-col justify-center items-center text-center text-white gap-4 mx-auto">
                    <h2 className="text-5xl font-monoHero font-bold mb-4">
                        Blogs.
                    </h2>
                    <div className="space-y-6 flex flex-col flex-1 w-full">
                        {posts.slice(0, 3).map((post) => (
                            <BlogPostCard
                                key={post.slug}
                                slug={post.slug}
                                title={post.frontmatter.title}
                                date={post.frontmatter.date}
                                excerpt={post.excerpt}
                                tags={post.frontmatter.tags}
                                readingTime={post.readingTime}
                            />
                        ))}

                        {/* Button to view all blogs */}
                        <a
                            href="/blog"
                            className="mt-4 self-center px-4 py-2 border border-darkOutline rounded-md hover:bg-darkOutline hover:text-white transition"
                        >
                            View All Posts
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
