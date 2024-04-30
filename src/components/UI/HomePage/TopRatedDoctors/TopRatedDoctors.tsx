import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

import doctorImg from "@/assets/doctor-image1.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();

  return (
    <Box
      sx={{
        my: 10,
        py: 40,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 0,100% 25%,100% 100%, 0 75%)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          textTransform={"capitalize"}
          variant="h4"
          fontWeight={600}
          component={"p"}
        >
          Our Top Rated Doctors
        </Typography>
        <Typography
          textTransform={"capitalize"}
          fontWeight={400}
          fontSize={"18px"}
          component={"p"}
          mt={2}
        >
          Access to expert physician and surgeons,advanced technologies
        </Typography>
        <Typography
          textTransform={"capitalize"}
          fontWeight={400}
          fontSize={"18px"}
          component={"p"}
        >
          and top-quality surgery facilities right here
        </Typography>
      </Box>

      {/* ! doctor card  */}
      <Container
        sx={{
          mt: 4,
        }}
      >
        <Grid container spacing={2}>
          {doctors.data.map((doctor: any) => (
            <Grid item key={doctor.id} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      objectFit: "cover",
                    },
                  }}
                >
                  {doctor.profilePhoto ? (
                    <Image
                      src={doctor.profilePhoto}
                      alt="doctor image"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <Image
                      src={doctorImg}
                      alt="doctor image"
                      width={100}
                      height={100}
                    />
                  )}
                </Box>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification},{doctor.designation}
                  </Typography>
                  <Box sx={{
                    marginTop:'10px',
                    color: "#222",
                    fontSize:"16px"
                  }}>
                    <LocationOnIcon /> {doctor.address}
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    size="small"
                    sx={{
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  <Button
                    size="small"
                    sx={{
                      width: "100%",
                    }}
                    variant="outlined"
                  >
                    View Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <Button variant="outlined">View All</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
