interface Props {
  key: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags?: string[];
  readingTime?: string;
  image?: string; // ✅ added
}

export default function BlogPostCard({
  key,
  title,
  date,
  excerpt,
  slug,
  tags,
  readingTime,
  image,
}: Props) {
  const placeholder = "https://placehold.co/400x300";

  return (
    <a
      href={`/blog/${slug}`}
      className="flex border-[1px] border-darkOutline rounded-md overflow-hidden hover:translate-x-1 transition w-full min-x-5xl "
      key={key}
    >
      <img
        src={image || placeholder}
        alt={title}
        className="w-60 h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1 text-left font-mono">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="text-gray-500 text-sm flex flex-col justify-between mt-1">
            <p>{date}</p>
            {readingTime && <p>{readingTime}</p>}
          </div>
          <p className="mt-2 text-sm line-clamp-4">{excerpt}</p>
        </div>

        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
