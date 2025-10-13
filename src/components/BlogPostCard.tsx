interface Props {
  key: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags?: string[];
  readingTime?: string;
}

export default function BlogPostCard({
  key,
  title,
  date,
  excerpt,
  slug,
  tags,
  readingTime,
}: Props) {
  return (
    <div
      className="border p-4 rounded-md shadow hover:shadow-lg transition"
      key={key}
    >
      <a
        href={`/blog/${slug}`}
        className="text-xl font-bold hover:text-blue-600"
      >
        {title}
      </a>
      <div className="text-gray-500 text-sm flex justify-between mt-1">
        <span>{date}</span>
        {readingTime && <span>{readingTime}</span>}
      </div>
      <p className="mt-2">{excerpt}...</p>
      {tags && tags.length > 0 && (
        <div className="mt-2 space-x-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
