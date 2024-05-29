const convertTo12HourTime = (isoString: Date) => {
  const date = new Date(isoString);

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Pad minutes and seconds with leading zeros if needed
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  const secondsStr = seconds < 10 ? "0" + seconds : seconds;

  // Format the time
  const formattedTime = `${hours}:${minutesStr}:${secondsStr} ${ampm}`;

  return formattedTime;
};

export default convertTo12HourTime;
