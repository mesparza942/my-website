import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Title from "./Title";
import { useSearch } from "../utils/useSearch";
import exercisesInfo from "../data/exercises.json";
import type { IExercises, SearchResultsProps } from "../utils/types";

const exercises = exercisesInfo as IExercises;

const SearchExercises = ({ searchTerm }: SearchResultsProps) => {
  const results = useSearch<IExercises>({
    searchTerm,
    data: exercises,
    searchKeys: ["list.name", "list.description", "list.tags"],
  });

  return (
    <>
      {results?.list.length ? (
        <>
          <Title label="Exercises" />
          <div className="grid grid-cols-2 gap-8 mb-8">
            {results.list.map((exercise) => (
              <div key={exercise.id}>
                <h2>
                  <a href={exercise.link} className="text-greenFav font-bold">
                    {exercise.name}
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="pl-2"
                    />
                  </a>
                </h2>
                <p>{exercise.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default SearchExercises;
