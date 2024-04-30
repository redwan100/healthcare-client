import assets from "@/assets";
import howItWorks from "@/assets/how-it-works-img.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
const solutionsData = [
  {
    id: 1,
    imgSrc: assets.svgs.search,
    title: "Search Doctor",
    description: `Access to expert physicians and surgeons, advanced technologies and
          top-quality surgery`,
  },
  {
    id: 2,
    imgSrc: assets.svgs.profile,
    title: "Check Doctor Profile",
    description: `Access to expert physicians and surgeons, advanced technologies and
          top-quality surgery`,
  },
  {
    id: 3,
    imgSrc: assets.svgs.schedule,
    title: "Schedule Appointment",
    description: `Access to expert physicians and surgeons, advanced technologies and
          top-quality surgery`,
  },
  {
    id: 4,
    imgSrc: assets.svgs.solution,
    title: "Get Your Solution",
    description: `Access to expert physicians and surgeons, advanced technologies and
          top-quality surgery`,
  },
];

const achievementData = [
  {
    number: "132",
    title: "Expert Doctors",
  },
  {
    number: "59",
    title: "Expert Services",
  },
  {
    number: "20K",
    title: "Happy Patients",
  },
  {
    number: "30",
    title: "Best Award Winners",
  },
];

type achievementProps = {
  number: string;
  title: string;
};
const HowItWorks = () => {
  return (
    <Container>
      <Box
        sx={{
          my: 10,
          py: 10,
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight={400} color={"primary"}>
            How It Works
          </Typography>
          <Typography variant="h4" fontWeight={600} my={1}>
            4 Easy Steps to Get Your Solution
          </Typography>
          <Typography variant="h6" component={"p"} color={"body1"} width={600}>
            Access to expert physicians and surgeons, advanced technologies and
            top-quality surgery facilities right here.
          </Typography>
        </Box>

        <Box
          sx={{
            my: 4,
          }}
        >
          <Grid container spacing={2}>
            <Grid item spacing={2} md={6}>
              <Image src={howItWorks} alt="how it works" />
            </Grid>

            <Grid item spacing={2} md={6}>
              <Grid container spacing={2}>
                {solutionsData.map((solution: any) => (
                  <Grid item spacing={2} sm={6} key={solution.id}>
                    <Box
                      sx={{
                        backgroundColor: "rgba(245,245,245,1)",
                        padding: "20px",
                        borderRadius: "10px",
                        border: "1px solid rgba(172, 226, 225,0.5)",

                        "&:hover": {
                          border: "1px solid rgba(0, 141, 218,0.6)",
                        },
                      }}
                    >
                      <Image src={solution.imgSrc} alt="solution image" />
                      <Typography
                        variant="h6"
                        component={"h1"}
                        fontWeight={600}
                        sx={{
                          my: 2,
                        }}
                      >
                        {solution.title}
                      </Typography>
                      <Typography
                        fontSize={"16px"}
                        fontWeight={400}
                        color={"body1"}
                      >
                        {solution.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 20px",
            borderRadius: "10px",
            marginTop: "10px",
            background:
              "linear-gradient(90deg, rgba(27,27,170,1) 0%, rgba(15,178,212,1) 100%)",
          }}
        >
          {achievementData.map((achievement: achievementProps) => (
            <Box key={achievement.number}>
              <Typography
                variant="h4"
                component={"h1"}
                fontWeight={600}
                color={"#fff"}
              >
                {achievement.number}+
              </Typography>
              <Typography fontSize={"18px"} color={"#fff"}>
                {achievement.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default HowItWorks;
