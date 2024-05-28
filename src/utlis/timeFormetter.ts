import dayjs from "dayjs";

export const timeFormatter = (time: string): string => {
  const formattedTime = dayjs(time).format("HH:mm:ss");
  return formattedTime;
};
