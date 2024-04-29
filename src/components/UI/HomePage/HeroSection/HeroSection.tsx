import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90",
            left: "-120",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box>
            <Typography component={"h1"} variant="h3" fontWeight={700}>
              Healthier Hearts
            </Typography>
            <Typography component={"h1"} variant="h3" fontWeight={700}>
              Come From
            </Typography>
            <Typography
              component={"h1"}
              variant="h3"
              color={"primary.main"}
              fontWeight={700}
            >
              Preventive Care
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" component={"p"} fontWeight={400}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              vero doloremque culpa sunt. Aut enim tempora neque asperiores
              quaerat inventore
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "18px",
            }}
          >
            <Button>Make Appointment</Button>
            <Button variant="outlined">Contact Us</Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          p: 1,
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} alt="arrow" width={100} height={100} />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              width={230}
              height={370}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor2"
              width={230}
              height={340}
            />
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "160px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            width={230}
            height={230}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "260px",
            left: "380px",
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="doctor3"
            width={230}
            height={230}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
