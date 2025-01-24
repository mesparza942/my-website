import React from "react";

import Title from "./Title";
import { useSearch } from "../utils/useSearch";
import companiesInfo from "../data/companies.json";
import type { ICompany, SearchResultsProps } from "../utils/types";

const companies = companiesInfo as ICompany[];

const SearchCompanies = ({ searchTerm }: SearchResultsProps) => {
  const jobCompanies = useSearch<ICompany>({
    searchTerm,
    data: companies,
    dataType: "Companies",
    searchKeys: ["name", "position", "responsibilities", "tags"],
  });

  return (
    <>
      {jobCompanies.length ? (
        <>
          <Title label="Companies" />
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 py-2">
            {jobCompanies.map(({ item: company }) => (
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
                      <span className="text-sm">
                        {company.time} ({company.period})
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 mx-4">
                    <h2 className="font-bold">Activities / Responsibilities</h2>
                    {company.responsibilities.map((text, idx) => (
                      <p key={idx} className="text-base">
                        - {text}
                      </p>
                    ))}
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
