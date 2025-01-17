import SearchProjects from "./SearchProjects";
import SearchCompanies from "./SearchCompanies";
import SearchCourses from "./SearchCourses";
import SearchExercises from "./SearchExercises";
import type { SearchResultsProps } from "../utils/types";

const SearchResults = ({ searchTerm }: SearchResultsProps) => {
  return (
    <>
      <SearchProjects searchTerm={searchTerm} />
      <SearchCourses searchTerm={searchTerm} />
      <SearchExercises searchTerm={searchTerm} />
      <SearchCompanies searchTerm={searchTerm} />
    </>
  );
};

export default SearchResults;
