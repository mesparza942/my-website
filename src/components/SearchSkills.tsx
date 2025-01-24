import React from "react";

import Title from "./Title";
import { useSearch } from "../utils/useSearch";
import skillsInfo from "../data/skills.json";
import type { ISkill, SearchResultsProps } from "../utils/types";

const skills = skillsInfo.list as ISkill[];

const SearchSkills = ({ searchTerm }: SearchResultsProps) => {
  const results = useSearch<ISkill>({
    searchTerm,
    data: skills,
    dataType: "Skills",
    searchKeys: ["name", "tags"],
  });

  return (
    <>
      {results.length ? (
        <>
          <Title label="Skills" />
          <div className="flex flex-col xl:grid xl:grid-cols-3 gap-3 mb-4">
            {results.map(({ item: skill }) => (
              <React.Fragment key={skill.id}>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{skill.name}</span>
                    <span className="text-sm">({skill.time})</span>
                  </div>
                  <div className="pt-2">
                    <p>{skill.reason}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default SearchSkills;
