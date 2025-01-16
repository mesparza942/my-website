import { useState } from "react";
import Container from "./Container";
import Title from "./Title";

interface SearchBarProps {
  value: string;
  onChange: (newValue: string) => void;
}
const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onChange(event.target.value);
  };
  return (
    <Container className="w-full p-4">
      <Title label="Want to go straight to the point?" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for a technology you are looking for..."
        className="w-full text-black dark:bg-zinc-200 p-2 rounded-lg border border-gray-300 dark:border-zinc-800 focus-visible:outline-greenFav"
      />
    </Container>
  );
};

export default SearchBar;
