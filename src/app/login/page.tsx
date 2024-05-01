"use client";

import logo from "@/assets/svgs/logo.svg";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.service";
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

export type TUserLogin = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TUserLogin>();
  const onSubmit: SubmitHandler<TUserLogin> = async (values) => {
    try {
      const res = await userLogin(values);

      if (res?.success) {
        toast.success(res.message);
        storeUserInfo(res?.data?.accessToken);
        router.push("/");
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={1}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("email")}
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
              </Grid>
              <Typography
                component={"p"}
                sx={{
                  textAlign: "right",
                  mb: 1,
                }}
              >
                Forgot Password?
              </Typography>
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
            </form>
          </Box>
          {/* form  */}
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
