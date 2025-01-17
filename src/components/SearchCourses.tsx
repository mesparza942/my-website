import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Title from "./Title";
import { useSearch } from "../utils/useSearch";
import coursesInfo from "../data/courses.json";
import type { ICourses, SearchResultsProps } from "../utils/types";
import { useMemo } from "react";

const courses = coursesInfo as ICourses;

const SearchCourses = ({ searchTerm }: SearchResultsProps) => {
  const results = useSearch<ICourses>({
    searchTerm,
    data: courses,
    searchKeys: ["list.name", "tags"],
  });

  const coursesResults = useMemo(() => {
    return results?.list.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [results, searchTerm]);

  return (
    <>
      {coursesResults?.length ? (
        <>
          <Title label="Courses" />
          <div className="grid grid-cols-4 gap-4 mb-4">
            {coursesResults.map((course) => (
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
