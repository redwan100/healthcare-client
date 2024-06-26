"use client";

import logo from "@/assets/svgs/logo.svg";
import HForm from "@/components/Forms/HForm";
import HInput from "@/components/Forms/HInput";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

export type TUserLogin = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);

      if (res?.success) {
        toast.success(res.message);
        storeUserInfo(res?.data?.accessToken);
      } else {
        toast.success(res.message);
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
                Login Healthcare
              </Typography>
            </Box>
          </Stack>

          {/* form  */}
          <Box>
            <HForm
              onSubmit={onSubmit}
              resolver={zodResolver(loginValidationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item sm={6} xs={12}>
                  <HInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <HInput
                    name="password"
                    label="Password"
                    type={checked ? "text" : "password"}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Box>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />{" "}
                show password
              </Box>

              <Link href="/forgot-password">
                <Typography
                  component={"p"}
                  sx={{
                    textAlign: "right",
                    width: "max-content",
                    marginLeft: "auto",
                    mb: 1,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Forgot Password?
                </Typography>
              </Link>

              <Button
                fullWidth={true}
                sx={{
                  margin: "10px 0",
                }}
                type="submit"
              >
                Login
              </Button>

              <Typography component={"p"} textAlign={"center"} fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Box
                  component={"span"}
                  sx={{
                    color: "blue",
                  }}
                >
                  <Link href="/register">Create an account</Link>
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

export default LoginPage;
