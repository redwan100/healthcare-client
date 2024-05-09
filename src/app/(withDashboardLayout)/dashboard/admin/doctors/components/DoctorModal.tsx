import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import HFullScreenModal from "@/components/Shared/Modal/FullScreenModal";
import HSelect from "@/components/Shared/Modal/HSelect";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import modifyPayload from "@/utils/modifyPayload";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TDoctorModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TDoctorModalProps) => {
  const [createDoctor] = useCreateDoctorMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.appointmentFee = Number(values.doctor.appointmentFee);

    const data = modifyPayload(values);
    try {
      const res = await createDoctor(data).unwrap();
      if (res?.createdDoctorData?.id) {
        toast.success("Doctor created successfully");
        setOpen(false);
      } else {
        toast.error("Please change value");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const defaultValues = {
    doctor: {
      name: "redwan",
      email: "redwan@gmail.com",
      contactNumber: "0123456789",
      address: "dhaka",
      gender: "",
      registrationNumber: "001",
      experience: 0,
      appointmentFee: 0,
      qualification: "MBBS",
      currentWorkingPlace: "dhaka",
      designation: "surgeon",
      profilePhoto: "",
    },
    password: "111111",
  };

  return (
    <HFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
      <HForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} my={6}>
          <Grid item sm={12} md={4}>
            <HInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <HInput
              name="doctor.email"
              label="Email"
              type="email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <HInput
              name="password"
              label="Password"
              type="password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item sm={12} md={4}>
            <HInput
              name="doctor.contactNumber"
              label="Contact Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <HInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <HInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <HInput
              name="doctor.experience"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <HSelect
              fullWidth={true}
              name="doctor.gender"
              label="Gender"
              items={Gender}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <HInput
              name="doctor.appointmentFee"
              label="Appointment Fee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <HInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <HInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <HInput
              name="doctor.currentWorkingPlace"
              label="Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Box>
          <Button type="submit">Create Admin</Button>
        </Box>
      </HForm>
    </HFullScreenModal>
  );
};

export default DoctorModal;
