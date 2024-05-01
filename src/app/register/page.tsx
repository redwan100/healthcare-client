"use client";
import logo from "@/assets/svgs/logo.svg";
import { registerPatient } from "@/services/actions/registerPatient";
import modifyPayload from "@/utils/modifyPayload";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TPatientData = {
  name: string;
  email: string;
  password: string;
  contactNumber: string;
  address: string;
};

export type TPatientRegisterFormData = {
  password: string;
  patient: TPatientData;
};

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TPatientRegisterFormData>();
  const onSubmit: SubmitHandler<TPatientRegisterFormData> = async (values) => {
    const data = modifyPayload(values);

    try {
      const res = await registerPatient(data);

      if (res?.data?.createdPatientData?.id) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.error(res?.message + "change email or other value");
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 3,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={logo} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          {/* form  */}
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={1}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    label="Contact Number"
                    type="tel"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.address")}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth={true}
                sx={{
                  margin: "10px 0",
                }}
                type="submit"
              >
                Register
              </Button>

              <Typography component={"p"} textAlign={"center"} fontWeight={300}>
                Do you already have an account?{" "}
                <Box
                  component={"span"}
                  sx={{
                    color: "blue",
                  }}
                >
                  <Link href="/login" color="blue">
                    Login
                  </Link>
                </Box>
              </Typography>
            </form>
          </Box>
          {/* form  */}
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
