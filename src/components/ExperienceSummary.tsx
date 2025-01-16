import Title from "./Title";
import generalInfo from "../data/info.json";
import skills from "../data/skills.json";
import projects from "../data/projects.json";
import exercises from "../data/exercises.json";
import courses from "../data/courses.json";
import companies from "../data/companies.json";
import type {
  ISkills,
  IProjects,
  ICompanies,
  ICourses,
  IExercises,
} from "../utils/types";

const mySkills = skills as ISkills;
const myProjects = projects as IProjects;
const myExercises = exercises as IExercises;
const myCourses = courses as ICourses;
const jobCompanies = companies as ICompanies;

const ExperienceSummary = () => {
  return (
    <>
      <Title label="About Me" />
      <p className="py-2">{generalInfo.aboutMe}</p>
      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <Title label="Main Skills" />
          <ul>
            {mySkills.mainSkills.map((skillSet, idx) => (
              <li key={idx}>⭑ {skillSet.list.join(", ")}</li>
            ))}
          </ul>
          <Title label="Courses" />
          <ul>
            {myCourses.list.map((course) => (
              <li key={course.id}>
                ⭑ {course.name} - {course.platform}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Title label="Projects" />
          <ul>
            {myProjects.list.map((project) => (
              <li key={project.id}>
                -{" "}
                <a href={project.link} target="_blank">
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
          <Title label="Code Excercises" />
          <ul>
            {myExercises.list.map((codeExercise) => (
              <li key={codeExercise.id}>
                -{" "}
                <a href={codeExercise.link} target="_blank">
                  {codeExercise.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Title label="Companies I have worked for" />
      <div className="grid grid-cols-3 gap-4 py-2">
        {jobCompanies.list.map((company) => (
          <div className="flex items-center gap-2">
            <img className="w-16 h-16" src={company.logo} alt="TMRW Logo" />
            <div className="flex flex-col">
              <span className="text-lg font-bold">{company.name}</span>
              <span className="text-sm">{company.time}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceSummary;
