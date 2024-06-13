"use client";
import { TModelProps } from "@/interfaces";
import { Box, Button, Grid } from "@mui/material";
import HcModelBox from "@/components/ui/DialogBox";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useGetAllScheduleQuery } from "@/redux/api/scheduleApi";
import MultipuleSelect from "./MultipuleSelect";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "sonner";

const SchdeduleModel = ({ open, setOpen }: TModelProps) => {
  const [selectDate, setSelectedDate] = useState(dayjs(new Date()));
  const [selectedValue, setSelectedValue] = useState<string[]>([]);
  const query: Record<string, any> = {};
  if (selectDate) {
    // dayjs(givenTime).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    query["startDate"] = dayjs(selectDate).hour(0).minute(0).millisecond(0);
    query["endDate"] = dayjs(selectDate).hour(23).minute(59).millisecond(999);
  }
  const { data, isLoading } = useGetAllScheduleQuery({ ...query });
  //Submit Schedule Data
  const [createDoctorSchedule, { isLoading: isSubmitting }] =
    useCreateDoctorScheduleMutation();

  const handleClick = async () => {
    try {
      const res = await createDoctorSchedule({
        schedule: selectedValue,
      }).unwrap();
      if (res?.count > 0) {
        toast.success("Your Schedule Created Successfully");
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to create specility !!!");
    }
  };

  return (
    <HcModelBox open={open} setOpen={setOpen} title="Choose Your Schedule">
      <Box>
        <Grid container spacing={3} padding={{ xs: 1, sm: 2 }}>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disablePast
                label="Choose Date"
                value={dayjs(selectDate)}
                onChange={(newValue) => setSelectedDate(dayjs(newValue))}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          {/* Multipule Select */}
          <Grid item xs={12}>
            {!isLoading ? (
              <MultipuleSelect
                data={data?.schedules}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
              />
            ) : (
              <></>
            )}
          </Grid>
          <Grid item md={12} textAlign={"end"}>
            <LoadingButton
              size="small"
              onClick={handleClick}
              loading={isSubmitting}
              loadingIndicator="Loading…"
            >
              <span>Submit</span>
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </HcModelBox>
  );
};

export default SchdeduleModel;
