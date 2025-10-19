import projects from "../data/projects.ts";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className=" border-darkOutline border-b bg-darkBackground">
      <div className="border-darkOutline bg-darkBackground border-x lg:mx-48 md:mx-16 m-0 gap-4 flex items-center justify-between md:py-12 py-6 xl:px-32 md:px-12 px-4">
        <div className="flex flex-col justify-between items-center text-center text-white mx-auto gap-12">
          <h2 className="text-5xl font-monoHero font-bold">My Projects.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                technologies={project.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
