import HFileUploader from "@/components/Forms/HFileUploader";
import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import Modal from "@/components/Shared/Modal/Modal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import modifyPayload from "@/utils/modifyPayload";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await createSpecialty(data).unwrap();
      if (res?.id) {
        toast.success("Specialty created successfully");
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  return (
    <Modal open={open} setOpen={setOpen} title="Create A New Specialty">
      <HForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <HInput name="title" label="Title" />
          </Grid>
          <Grid item sm={6}>
            <HFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Button
            type="submit"
            sx={{
              width: "100%",
            }}
          >
            Create
          </Button>
        </Box>
      </HForm>
    </Modal>
  );
};

export default SpecialtyModal;
