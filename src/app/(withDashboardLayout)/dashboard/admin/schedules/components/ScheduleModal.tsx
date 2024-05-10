import HDatePicker from "@/components/Forms/HDatePicker";
import HForm from "@/components/Forms/HForm";
import Modal from "@/components/Shared/Modal/Modal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { TProps } from "../../specialties/components/SpecialistModal";

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleSubmit = async (values: FieldValues) => {
    try {
      console.log(values);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <Modal open={open} setOpen={setOpen} title="Create Schedule">
      <HForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <HDatePicker name="startDate" />
          </Grid>
        </Grid>
        <Button
          sx={{
            mt: 2,
          }}
          type="submit"
        >
          Create
        </Button>
      </HForm>
    </Modal>
  );
};

export default ScheduleModal;
