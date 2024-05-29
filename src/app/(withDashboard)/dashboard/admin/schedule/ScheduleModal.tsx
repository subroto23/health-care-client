import { TModelProps } from "@/components/constants/globalConstants";
import HCForm from "@/components/forms/FormProvider";
import HCDatePicker from "@/components/forms/HCDatePicker";
import HCTimePicker from "@/components/forms/HCTimePicker";
import HcModelBox from "@/components/ui/DialogBox";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormater } from "@/utlis/dateFormeting";
import { timeFormatter } from "@/utlis/timeFormetter";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ScheduleModal = ({ open, setOpen }: TModelProps) => {
  const [createSchedules] = useCreateScheduleMutation();
  const handleSubmit = async (values: FieldValues) => {
    const startDate = dateFormater(values?.startDate?.$d);
    const endDate = dateFormater(values?.endDate?.$d);
    const startTime = timeFormatter(values?.startTime?.$d);
    const endTime = timeFormatter(values?.endTime?.$d);
    //Values Change this format
    values["startDate"] = startDate;
    values["endDate"] = endDate;
    values["startTime"] = startTime;
    values["endTime"] = endTime;
    //Send Dato to Backend
    try {
      const res = await createSchedules(values).unwrap();
      if (res?.length > 0) {
        toast.success("Schedule Created Successfully");
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to create Schedule !!!");
    }
  };
  return (
    <>
      <HcModelBox title="New Schedule Create" open={open} setOpen={setOpen}>
        <Box>
          <HCForm onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Start Date */}
              <Grid item xs={12} sm={6}>
                <HCDatePicker name="startDate" label="Start Date" />
              </Grid>
              {/* Start Time */}
              <Grid item xs={12} sm={6}>
                <HCTimePicker name="startTime" label="Start Time" />
              </Grid>
              {/* End Date */}
              <Grid item xs={12} sm={6}>
                <HCDatePicker name="endDate" label="End Date" />
              </Grid>
              {/* EndTime */}
              <Grid item xs={12} sm={6}>
                <HCTimePicker name="endTime" label="End Time" />
              </Grid>

              <Grid item md={12} textAlign={"end"}>
                <Button type="submit">Submit</Button>
              </Grid>
            </Grid>
          </HCForm>
        </Box>
      </HcModelBox>
    </>
  );
};

export default ScheduleModal;
