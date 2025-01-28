interface CompanyChipProps {
  companyName: string;
  companyLogo: string;
  companyJobTime: string;
  companyJobPeriodTime: string;
}
const CompanyChip = ({
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
        <span className="text-lg font-bold">{companyName}</span>
        <span className="text-sm">
          {companyJobTime} ({companyJobPeriodTime})
        </span>
      </div>
    </div>
  );
};

export default CompanyChip;
