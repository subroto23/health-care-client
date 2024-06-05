export const convertYesNoToBoolean = (obj: any) => {
  for (let key in obj) {
    if (obj[key] === "Yes") {
      obj[key] = true;
    } else if (obj[key] === "No") {
      obj[key] = false;
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      convertYesNoToBoolean(obj[key]);
    }
  }
  return obj;
};

export const convertBooleanToYesNo = (val: any) => {
  if (val === true) {
    return "Yes";
  } else if (val === false) {
    return "No";
  }
};
