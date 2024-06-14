"use client";

import useUserInfo from "@/app/(withCommonLayout)/doctors/useUserInfo";
import logoutUser from "@/services/actions/logoutUser";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const userInfo = useUserInfo();
  const router = useRouter();

  const handleLogout = () => {
    logoutUser(router);
    router.refresh();
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
          {userInfo?.role ? (
            <Typography component={Link} href={"/dashboard"}>
              Dashboard
            </Typography>
          ) : null}
        </Stack>

        {userInfo.role ? (
          <Button color="error" onClick={handleLogout}>
            Logout
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
