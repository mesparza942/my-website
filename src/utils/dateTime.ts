export const getFormattedEcuadorTime = () => {
  const ecuadorTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Guayaquil",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${ecuadorTime} (UTC -05:00)`;
};
