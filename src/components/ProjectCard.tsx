interface Props {
  key: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function ProjectCard({
  key,
  title,
  description,
  image,
  link,
}: Props) {
  return (
    <div
      className="border rounded-md overflow-hidden shadow-md hover:shadow-lg transition"
      key={key}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            className="text-blue-600 mt-2 inline-block"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
