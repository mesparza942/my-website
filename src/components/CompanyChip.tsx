interface CompanyChipProps {
  jobPosition: string;
  companyName: string;
  companyLogo: string;
  companyJobTime: string;
  companyJobPeriodTime: string;
}
const CompanyChip = ({
  jobPosition,
  companyName,
  companyLogo,
  companyJobTime,
  companyJobPeriodTime,
}: CompanyChipProps) => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-20 h-20"
        src={companyLogo}
        alt={`${companyName} logo`}
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold">{jobPosition}</span>
        <span className="text-base">{companyName}</span>
        <span className="text-xs">
          {companyJobTime} ({companyJobPeriodTime})
        </span>
      </div>
    </div>
  );
};

export default CompanyChip;
