"use client";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Title from "./Title";
import { useSearch } from "../utils/useSearch";
import exercisesInfo from "../data/exercises.json";
import type { IExercise, SearchResultsProps } from "../utils/types";

const exercises = exercisesInfo as IExercise[];

const SearchExercises = ({ searchTerm }: SearchResultsProps) => {
  const results = useSearch<IExercise>({
    searchTerm,
    data: exercises,
    dataType: "Exercises",
    searchKeys: ["name", "description", "tags"],
  });

  return (
    <>
      {results?.length ? (
        <>
          <Title label="Exercises" />
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 mb-8">
            {results.map(({ item: exercise }) => (
              <div key={exercise.id}>
                <h2>
                  <a
                    href={exercise.link}
                    target="_blank"
                    className="text-greenFav font-bold"
                  >
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
