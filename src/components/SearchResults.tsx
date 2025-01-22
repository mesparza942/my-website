import SearchProjects from "./SearchProjects";
import SearchCompanies from "./SearchCompanies";
import SearchCourses from "./SearchCourses";
import SearchExercises from "./SearchExercises";
import SearchSkills from "./SearchSkills";
import SearchEducation from "./SearchEducation";
import type { SearchResultsProps } from "../utils/types";

const SearchResults = ({ searchTerm }: SearchResultsProps) => {
  return (
    <>
      <SearchEducation searchTerm={searchTerm} />
      <SearchSkills searchTerm={searchTerm} />
      <SearchCompanies searchTerm={searchTerm} />
      <SearchProjects searchTerm={searchTerm} />
      <SearchCourses searchTerm={searchTerm} />
      <SearchExercises searchTerm={searchTerm} />
    </>
  );
};

export default SearchResults;
