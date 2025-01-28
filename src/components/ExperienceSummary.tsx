import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import Title from "./Title";
import CompanyChip from "./CompanyChip";
import generalInfo from "../data/info.json";
import skills from "../data/skills.json";
import projects from "../data/projects.json";
import exercises from "../data/exercises.json";
import courses from "../data/courses.json";
import companies from "../data/companies.json";
import education from "../data/education.json";
import type {
  IProject,
  ICompany,
  ICourse,
  IExercise,
  IEducation,
} from "../utils/types";

const mySkills = skills.mainSkills as { list: string[] }[];
const myProjects = projects as IProject[];
const myExercises = exercises as IExercise[];
const myCourses = courses as ICourse[];
const jobCompanies = companies as ICompany[];
const myEducation = education as IEducation;

const ExperienceSummary = () => {
  return (
    <>
      <Title label="About Me" />
      <p className="py-2">{generalInfo.aboutMe}</p>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 my-4">
        <div className="flex flex-col gap-4">
          <div>
            <Title label="Main Skills" />
            <ul>
              {mySkills.map((skillSet, idx) => (
                <li key={idx}>
                  <span className="text-greenFav">⭑</span>{" "}
                  {skillSet.list.join(", ")}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Title label="Courses" />
            <ul>
              {myCourses.map((course) => (
                <li key={course.id}>
                  - {course.name} - {course.platform}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <Title label="Projects" />
            <ul>
              {myProjects.map((project) => (
                <li key={project.id}>
                  -{" "}
                  <a href={project.link} target="_blank">
                    {project.name}
                    <FontAwesomeIcon icon={faGithub} className="pl-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Title label="Code Exercises" />
            <ul>
              {myExercises.map((codeExercise) => (
                <li key={codeExercise.id}>
                  -{" "}
                  <a href={codeExercise.link} target="_blank">
                    {codeExercise.name}
                    <FontAwesomeIcon icon={faCode} className="pl-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Title label="Education" />
            <div>
              <h2 className="text-xl font-bold">{myEducation.university}</h2>
              <span className="text-base">
                {myEducation.degree} - {myEducation.dateGraduated}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Title label="Companies I have worked for" />
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 py-2">
          {jobCompanies.map((company) => (
            <CompanyChip
              key={company.id}
              jobPosition={company.position}
              companyName={company.name}
              companyLogo={company.logo}
              companyJobTime={company.time}
              companyJobPeriodTime={company.period}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceSummary;
