export const getFormattedLocalTime = () => {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const offsetMinutes = now.getTimezoneOffset();

  const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
  const offsetRemainingMinutes = Math.abs(offsetMinutes) % 60;

  // Format UTC offset
  const sign = offsetMinutes <= 0 ? "+" : "-"; // Negative offsetMinutes means ahead of UTC
  const formattedOffset = `UTC ${sign}${String(offsetHours).padStart(
    2,
    "0"
  )}:${String(offsetRemainingMinutes).padStart(2, "0")}`;

  return `${hours}:${minutes} (${formattedOffset})`;
};
