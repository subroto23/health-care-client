import dayjs from "dayjs";
export const dateFormater = (date: string): string => {
  const formattedDate = dayjs(date).format("YYYY-MM-DD");
  return formattedDate;
};
