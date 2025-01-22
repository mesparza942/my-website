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
    <Container className="w-full p-4 flex flex-col md:block">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Title label="Want to go straight to the point?" />
        <Button
          className="self-start m-0 hidden md:block"
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
      <Button
        className="flex w-fit self-center mt-4 md:hidden"
        btnType="link"
        href={MyCV}
        download="marcelo-esparza-cv"
      >
        Download CV
        <FontAwesomeIcon icon={faDownload} className="w-4 h-4 pl-1" />
      </Button>
    </Container>
  );
};

export default SearchBar;
