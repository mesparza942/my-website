import Container from "./Container";
import Title from "./Title";

const SearchBar = () => {
  return (
    <Container className="w-full p-4">
      <Title label="Want to go straight to the point?" />
      <input
        type="text"
        placeholder="Search for a technology you are looking for..."
        className="w-full text-white dark:text-black p-2 rounded-lg border border-gray-300 dark:border-zinc-800"
      />
    </Container>
  );
};

export default SearchBar;
