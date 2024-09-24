export const formatDateRange = (startDate: Date, endDate?: Date) => {
  const options = { year: "numeric", month: "long" };
  const startFormatted = startDate.toLocaleDateString("en-US", options);
  let endFormatted = "Present";
  if (endDate) {
    endFormatted = endDate.toLocaleDateString("en-US", options);
  }

  return `${startFormatted} —  ${endFormatted}`;
};
