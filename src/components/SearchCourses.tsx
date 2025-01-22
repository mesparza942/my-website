import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Title from "./Title";
import { useSearch } from "../utils/useSearch";
import coursesInfo from "../data/courses.json";
import type { ICourse, SearchResultsProps } from "../utils/types";

const courses = coursesInfo as ICourse[];

const SearchCourses = ({ searchTerm }: SearchResultsProps) => {
  const results = useSearch<ICourse>({
    searchTerm,
    data: courses,
    searchKeys: ["name", "tags"],
  });

  return (
    <>
      {results?.length ? (
        <>
          <Title label="Courses" />
          <div className="grid grid-cols-4 gap-4 mb-4">
            {results.map(({ item: course }) => (
              <div key={course.id} className="border-green-300 rounded-xl p-2">
                <p className="font-bold">
                  ⭑ {course.name} - {course.platform}
                </p>
                <p className="text-base">
                  Date Completed: {course.dateCompleted}
                </p>
                {course.certificate ? (
                  <a
                    href={course.certificate}
                    className="text-greenFav"
                    target="_blank"
                  >
                    See Certificate
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="pl-2"
                    />
                  </a>
                ) : null}
                {course.link ? (
                  <a
                    href={course.link}
                    className="text-green-400 ml-4"
                    target="_blank"
                  >
                    Course Link
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="pl-2"
                    />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default SearchCourses;
