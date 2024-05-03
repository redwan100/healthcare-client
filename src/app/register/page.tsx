"use client";
import logo from "@/assets/svgs/logo.svg";
import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import { registerPatient } from "@/services/actions/registerPatient";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import modifyPayload from "@/utils/modifyPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const patientRegisterValidationSchema = z.object({
  name: z.string().min(1, "please enter your name!"),
  email: z.string().email("please enter your email address"),
  contactNumber: z.string().min(11, "please enter your contact number"),
  address: z.string().min(1, "please enter your address"),
});

export const validationSchema = z.object({
  password: z.string().min(6, "please provide at least 6 characters "),
  patient: patientRegisterValidationSchema,
});

const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await registerPatient(data);

      if (res?.data?.createdPatientData?.id) {
        toast.success(res?.message);

        const result = await userLogin({
          email: values.patient.email,
          password: values.password,
        });

        if (result?.success) {
          storeUserInfo(result?.data?.accessToken);
          router.push("/");
        }
      } else {
        toast.error("change email or other value");
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
            <HForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12}>
                  <HInput label="Name" fullWidth={true} name="patient.name" />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <HInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="patient.email"
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <HInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <HInput
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <HInput
                    label="Address"
                    fullWidth={true}
                    name="patient.address"
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
            </HForm>
          </Box>
          {/* form  */}
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
