"use client";

import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.service";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
  const router = useRouter();
  const userInfo = getUserInfo();
  const isLogged = isLoggedIn();

  const logout = () => {
    removeUser();
    toast.success("successfully logout");
    router.push("/login");
  };

  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h5" component={Link} href={"/"} fontWeight={600}>
          <Box component={"span"} color={"primary.main"}>
            H
          </Box>
          ealth Care
        </Typography>

        <Stack direction={"row"} gap={4}>
          <Typography component={Link} href={"/consultation"}>
            Consultations
          </Typography>
          <Typography>Health Plans</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>

        {isLogged ? (
          <Button
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            onClick={logout}
          >
            Log out
          </Button>
        ) : (
          <Button LinkComponent={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
