import React from "react";

import Title from "./Title";
import { useSearch } from "../utils/useSearch";
import companiesInfo from "../data/companies.json";
import type { ICompanies, SearchResultsProps } from "../utils/types";

const companies = companiesInfo as ICompanies;

const SearchCompanies = ({ searchTerm }: SearchResultsProps) => {
  const jobCompanies = useSearch<ICompanies>({
    searchTerm,
    data: companies,
    searchKeys: [
      "list.name",
      "list.position",
      "list.responsibilities",
      "list.tags",
    ],
  });

  return (
    <>
      {jobCompanies?.list.length ? (
        <>
          <Title label="Companies" />
          <div className="grid grid-cols-2 gap-8 py-2">
            {jobCompanies.list.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-16 h-16"
                      src={company.logo}
                      alt={`${company.name} logo`}
                    />
                    <div className="flex flex-col">
                      <span className="text-lg font-bold">{company.name}</span>
                      <span className="text-sm">{company.time}</span>
                    </div>
                  </div>
                  <div className="pt-2 mx-4">
                    <h2 className="font-bold">Activities / Responsibilities</h2>
                    <p className="text-base">{company.responsibilities}</p>
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

export default SearchCompanies;
