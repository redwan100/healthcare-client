"use client";

import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import HSelect from "@/components/Shared/Modal/HSelect";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctorId: string;
  };
};

const DoctorEditPage = ({ params }: TParams) => {
  const { data, isLoading } = useGetDoctorQuery(params?.doctorId);
  const [updateDoctor] = useUpdateDoctorMutation();
  const router = useRouter();

  const handleFormSubmit = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.appointmentFee = Number(values.appointmentFee);
    values.id = params?.doctorId;

    try {
      const res = await updateDoctor({
        id: values.id,
        body: values,
      }).unwrap();

      if (res?.id) {
        toast.success("Doctor updated successfully");
        router.push("/dashboard/admin/doctors");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const defaultValues = {
    name: data?.name || "",
    email: data?.email || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    gender: data?.gender || "",
    registrationNumber: data?.registrationNumber || "",
    experience: data?.experience || 0,
    appointmentFee: data?.appointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };
  return (
    <Box>
      <Typography component={"h4"} variant="h4">
        Update Doctor Info
      </Typography>
      {!isLoading ? (
        <HForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
          <Grid container spacing={2} my={2}>
            <Grid item sm={12} md={4}>
              <HInput
                name="name"
                label="Name"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <HInput
                name="email"
                label="Email"
                type="email"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item sm={12} md={4}>
              <HInput
                name="contactNumber"
                label="Contact Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <HInput
                name="address"
                label="Address"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <HInput
                name="registrationNumber"
                label="Registration Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <HInput
                name="experience"
                label="Experience"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <HSelect
                fullWidth={true}
                name="gender"
                label="Gender"
                items={Gender}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <HInput
                name="appointmentFee"
                label="Appointment Fee"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <HInput
                name="qualification"
                label="Qualification"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <HInput
                name="designation"
                label="Designation"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <HInput
                name="currentWorkingPlace"
                label="Working Place"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <Box>
            <Button type="submit">Update</Button>
          </Box>
        </HForm>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default DoctorEditPage;
