import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, postUrl } from "../lib/posts";
import { site } from "../site";

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: `${site.name}'s blog`,
    description: site.description,
    site: context.site ?? "https://diljits.com",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: postUrl(post),
    })),
  });
}
