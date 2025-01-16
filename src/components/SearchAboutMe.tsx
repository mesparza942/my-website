import { useMemo } from "react";
import Fuse from "fuse.js";

import Title from "./Title";
import generalInfo from "../data/info.json";
import type { IMyInfo } from "../utils/types";

const myInfo = generalInfo as IMyInfo;

interface SearchResultsProps {
  searchTerm: string;
}
const SearchAboutMe = ({ searchTerm }: SearchResultsProps) => {
  const response = useMemo(() => {
    const fuse = new Fuse([myInfo], {
      keys: ["aboutMe", "tags"],
      includeScore: true,
      threshold: 0.6, // Allow fuzzy matching for typos
    });

    return fuse.search(searchTerm);
  }, [searchTerm]);

  const resultTxt = useMemo(() => {
    if (response.length) {
      return response[0].item.aboutMe;
    }
  }, [response]);

  return (
    <>
      {resultTxt ? (
        <>
          <Title label="About Me" />
          <p>{resultTxt}</p>{" "}
        </>
      ) : (
        <Title label="Oops, nothing found but I can surely learn!" />
      )}
    </>
  );
};

export default SearchAboutMe;
