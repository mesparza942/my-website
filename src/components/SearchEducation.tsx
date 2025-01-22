import Title from "./Title";
import { useSearch } from "../utils/useSearch";
import educationInfo from "../data/education.json";
import type { IEducation, SearchResultsProps } from "../utils/types";

const SearchEducation = ({ searchTerm }: SearchResultsProps) => {
  const results = useSearch<IEducation>({
    searchTerm,
    data: [educationInfo],
    dataType: "Education",
    searchKeys: ["tags"],
  });

  return (
    <>
      {results.length ? (
        <>
          <Title label="Education" />
          <div className="flex flex-col py-2 mb-4">
            <h3 className="font-bold text-lg">{results[0].item.degree}</h3>
            <p className="text-base">
              Graduated: {results[0].item.dateGraduated}
            </p>
            <p className="text-base">{results[0].item.university}</p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SearchEducation;
