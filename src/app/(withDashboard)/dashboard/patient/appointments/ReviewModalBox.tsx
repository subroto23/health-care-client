import HCForm from "@/components/forms/FormProvider";
import HCInputForm from "@/components/forms/HCInputForm";
import HcModelBox from "@/components/ui/DialogBox";
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import { Box, Button, Container } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  appointmentId: string;
};
const ReviewModalBox = ({ open, setOpen, appointmentId }: TProps) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();
  const handleSubmit = async (values: FieldValues) => {
    // rating convert into Number
    values.rating = Number(values.rating);
    if (!(values.rating > 0 && values.rating <= 5)) {
      toast.error("Please write rating 1 to 5");
      return;
    }
    const sendRatingValues = {
      appointmentId,
      ...values,
    };
    try {
      const res = await createReview(sendRatingValues).unwrap();
      if (res) {
        toast.success("Review Submitted to Doctors Profile");
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to Create Review !!!");
    }
  };
  return (
    <HcModelBox open={open} setOpen={setOpen} title="Please Review Your Doctor">
      <Container>
        <Box
          sx={{
            paddingY: 1,
          }}
        >
          <HCForm onSubmit={handleSubmit}>
            <HCInputForm
              name="comment"
              label="Write Comment"
              type="text"
              placeholder="Doctor is Good"
              fullWidth={true}
            ></HCInputForm>
            <HCInputForm
              name="rating"
              label="Rating Doctor"
              type="number"
              placeholder="1 to 5"
              fullWidth={true}
              sx={{ marginY: 2 }}
            ></HCInputForm>
            <Box sx={{ textAlign: "end", marginTop: 1 }}>
              <Button type="submit" sx={{ color: "#ffff" }}>
                {isLoading ? "Sending..." : "Submit"}
              </Button>
            </Box>
          </HCForm>
        </Box>
      </Container>
    </HcModelBox>
  );
};

export default ReviewModalBox;
