"use client";
import React from "react";

import Title from "./Title";
import CompanyChip from "./CompanyChip";
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
                  <CompanyChip
                    jobPosition={company.position}
                    companyName={company.name}
                    companyLogo={company.logo}
                    companyJobTime={company.time}
                    companyJobPeriodTime={company.period}
                  />
                  <div className="pt-2">
                    <h2 className="font-bold">Activities / Responsibilities</h2>
                    {company.responsibilities.map((text, idx) => (
                      <p key={idx} className="text-base mx-3">
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
