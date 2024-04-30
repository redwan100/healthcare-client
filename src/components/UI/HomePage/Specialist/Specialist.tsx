import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/specialties`, {
    next: {
      revalidate: 30,
    },
  });
  const specialties = await res.json();

  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments across specialties
          </Typography>
          <Typography component={"p"} fontWeight={400} fontSize={"18px"}>
            Experienced Across All Doctor Specialties
          </Typography>
        </Box>

        <Stack direction={"row"} gap={4} mt={6}>
          {specialties.data.map((specialty: any) => (
            <Box key={specialty.id}>
              <Box
                sx={{
                  flex: 1,
                  bgcolor: "rgba(245,245,245,1)",
                  padding: "25px 20px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,1)",

                  "& img": {
                    width: "50px",
                    height: "50px",
                    margin: "0 auto",
                  },
                  "&:hover": {
                    border: "1px solid blue",
                  },
                }}
              >
                <Image
                  src={specialty.icon}
                  alt="specialty icon"
                  width={100}
                  height={100}
                />
                <Typography
                  fontWeight={600}
                  fontSize={"18px"}
                  mt={2}
                  textAlign={"center"}
                  textTransform={"capitalize"}
                >
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Button
          variant="outlined"
          sx={{
            marginTop: "20px",
          }}
        >
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
