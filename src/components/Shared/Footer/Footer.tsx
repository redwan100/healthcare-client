import facebook from "@/assets/landing_page/facebook.png";
import instagram from "@/assets/landing_page/instagram.png";
import linkedin from "@/assets/landing_page/linkedin.png";
import twitter from "@/assets/landing_page/twitter.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,24,36)" py={4}>
      <Container>
        <Stack
          py={2}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack direction={"row"} gap={4}>
            <Typography component={Link} href={"/consultation"} color={"#fff"}>
              Consultations
            </Typography>
            <Typography color={"#fff"}>Health Plans</Typography>
            <Typography color={"#fff"}>Medicine</Typography>
            <Typography color={"#fff"}>Diagnostics</Typography>
            <Typography color={"#fff"}>NGOs</Typography>
          </Stack>
        </Stack>

        <Stack direction={"row"} gap={4} justifyContent={"center"}>
          <Image src={facebook} alt="facebook" width={30} height={30} />
          <Image src={twitter} alt="twitter" width={30} height={30} />
          <Image src={linkedin} alt="linkedin" width={30} height={30} />
          <Image src={instagram} alt="instagram" width={30} height={30} />
        </Stack>

        <div className=" border-[1px] border-dashed my-5"></div>

        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography color="#fff">
            &copy; {new Date().getFullYear()} HealthCare. All rights reserved
          </Typography>

          <Typography
            variant="h4"
            component={Link}
            href={"/"}
            fontWeight={600}
            color="#fff"
          >
            <Box component={"span"} color={"primary.main"}>
              H
            </Box>
            ealth Care
          </Typography>

          <Typography color="#fff">
            Privacy Policy.{" "}
            <Box component={Link} href={"#"}>
              Terms and Conditions
            </Box>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
