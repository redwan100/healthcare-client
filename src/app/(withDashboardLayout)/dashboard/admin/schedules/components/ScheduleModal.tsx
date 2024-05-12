import HDatePicker from "@/components/Forms/HDatePicker";
import HForm from "@/components/Forms/HForm";
import HTimePicker from "@/components/Forms/HTimePicker";
import Modal from "@/components/Shared/Modal/Modal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormtter";
import timeFormatter from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { TProps } from "../../specialties/components/SpecialistModal";

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);
    try {
      const res = await createSchedule(values);

      if (res?.length) {
        toast.success("Schedule created successfully");
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <Modal open={open} setOpen={setOpen} title="Create Schedule">
      <HForm onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Grid item sm={12}>
            <HDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item sm={12}>
            <HDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item sm={6}>
            <HTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item sm={6}>
            <HTimePicker name="endTime" label="End Time" />
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
