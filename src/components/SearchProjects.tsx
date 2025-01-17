import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Title from "./Title";
import { useSearch } from "../utils/useSearch";
import projectsInfo from "../data/projects.json";
import skillsInfo from "../data/skills.json";
import type { IProjects, ISkills, SearchResultsProps } from "../utils/types";

const projects = projectsInfo as IProjects;
const skills = skillsInfo as ISkills;

const SearchProjects = ({ searchTerm }: SearchResultsProps) => {
  const results = useSearch<IProjects>({
    searchTerm,
    data: projects,
    searchKeys: ["list.name", "list.description", "tags"],
  });

  return (
    <>
      {results?.list.length ? (
        <>
          <Title label="Projects" />
          <div className="grid grid-cols-2 gap-8 mb-8">
            {results.list.map((project) => (
              <div key={project.id}>
                <h2>
                  <a href={project.link} className="text-greenFav font-bold">
                    {project.name}
                    <FontAwesomeIcon icon={faGithub} className="pl-2" />
                  </a>
                </h2>
                <p className="mb-4">{project.description}</p>
                <h3>Skills gained:</h3>
                <div className="flex gap-4">
                  {skills.list
                    .filter((skill) => project.skills.includes(skill.id))
                    .map((skill) => (
                      <span key={skill.id} className="font-bold">
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default SearchProjects;
