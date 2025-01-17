import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Container from "./Container";
import Title from "./Title";
import Button from "./Button";
import MyCV from "../assets/CV-MarceloEsparza-2025.pdf";

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
      <div className="flex justify-between items-center">
        <Title label="Want to go straight to the point?" />
        <Button
          className="self-start m-0"
          btnType="link"
          href={MyCV}
          download="marcelo-esparza-cv"
        >
          Download CV
          <FontAwesomeIcon icon={faDownload} className="w-4 h-4 pl-1" />
        </Button>
      </div>
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
