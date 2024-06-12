import HCForm from "@/components/forms/FormProvider";
import HCInputForm from "@/components/forms/HCInputForm";
import HcModelBox from "@/components/ui/DialogBox";
import { useForgottenPasswordMutation } from "@/redux/api/authApi";
import { Box, Button, Container } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ForgorrenPasswordModelBox = ({ open, setOpen }: TProps) => {
  const [forgottenPassword, { isLoading }] = useForgottenPasswordMutation();
  const handleSubmit = async (values: FieldValues) => {
    try {
      const res = await forgottenPassword(values).unwrap();
      if (res) {
        toast.success(res?.message);
        setOpen(false);
      }
    } catch (error) {
      toast.error("Failed to Verify You !!!");
    }
  };
  return (
    <HcModelBox open={open} setOpen={setOpen} title="Please Fill The form">
      <Container>
        <Box
          sx={{
            paddingY: 1,
          }}
        >
          <HCForm onSubmit={handleSubmit}>
            <HCInputForm
              name="email"
              label="Email"
              type="email"
              placeholder="email@example.xom"
              fullWidth={true}
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

export default ForgorrenPasswordModelBox;
