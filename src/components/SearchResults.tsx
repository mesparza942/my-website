import SearchAboutMe from "./SearchAboutMe";

interface SearchResultsProps {
  searchTerm: string;
}
const SearchResults = ({ searchTerm }: SearchResultsProps) => {
  return (
    <>
      <SearchAboutMe searchTerm={searchTerm} />
    </>
  );
};

export default SearchResults;
