import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import convertTo12HourTime from "@/utlis/convertTime12Hour";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipuleSelect = ({ data, selectedValue, setSelectedValue }: any) => {
  const handleChange = (event: SelectChangeEvent<typeof selectedValue>) => {
    const {
      target: { value },
    } = event;
    setSelectedValue(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: "100%" }} fullWidth>
        <InputLabel id="demo-multiple-chip-label">
          Select Suitable Schedule
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedValue}
          onChange={handleChange}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label="Select Your Options"
            />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value: any) => {
                const selectedValusData = data?.find(
                  (el: any) => el.id === value
                );
                if (!selectedValusData) {
                  return null;
                }

                const time =
                  convertTo12HourTime(selectedValusData.startDate) +
                  " - " +
                  convertTo12HourTime(selectedValusData.endDate);

                return <Chip key={value} label={time} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {data?.map((el: any) => (
            <MenuItem
              key={el?.id}
              value={el?.id}
              sx={{ justifyContent: "center", paddingY: 2 }}
            >
              {convertTo12HourTime(el?.startDate)} -
              {convertTo12HourTime(el?.endDate)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default MultipuleSelect;
