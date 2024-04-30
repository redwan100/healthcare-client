import assets from "@/assets";
import choseUsImg from "@/assets/choose-us.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
const serviceData = [
  {
    imgSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "reiciendis corporis, explicabo harum ducimus alias sunt consequuntur placeat, vero, iure ullam?",
  },
  {
    imgSrc: assets.svgs.care,
    title: "Best Quality Pregnancy Care",
    description:
      "reiciendis corporis, explicabo harum ducimus alias sunt consequuntur placeat, vero, iure ullam?",
  },
  {
    imgSrc: assets.svgs.equipment,
    title: "Complete Medical Equipment",
    description:
      "reiciendis corporis, explicabo harum ducimus alias sunt consequuntur placeat, vero, iure ullam?",
  },
  {
    imgSrc: assets.svgs.call,
    title: "Dedicated Emergency Care",
    description:
      "reiciendis corporis, explicabo harum ducimus alias sunt consequuntur placeat, vero, iure ullam?",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color={"primary"}
            variant="h6"
            component={"h1"}
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component={"h1"} fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>

        {/* card  */}
        <Grid container spacing={2} my={6}>
          <Grid item md={6}>
            <Box
              sx={{
                backgroundColor: "rgba(245,245,245,1)",
                display: "flex",
                gap: "15px",
                alignItems: "center",
                padding: "20px 15px",
                borderRadius: "10px 10px 90px 10px",
              }}
            >
              {/* img  */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <Image src={serviceData[0].imgSrc} alt="award" width={50} />
              </Box>
              {/* title  */}
              <Box>
                <Typography variant="h6" component={"h6"} fontWeight={600}>
                  {serviceData[0].title}
                </Typography>
                <Typography
                  variant={"body2"}
                  fontWeight={400}
                  color="primary.body1"
                >
                  {serviceData[0].description}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "rgba(245,245,245,1)",
                display: "flex",
                gap: "15px",
                alignItems: "center",
                padding: "20px 15px",
                borderRadius: "10px 90px 10px 10px",
                my: 2,
              }}
            >
              {/* img  */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <Image src={serviceData[1].imgSrc} alt="award" width={50} />
              </Box>
              {/* title  */}
              <Box>
                <Typography variant="h6" component={"h6"} fontWeight={600}>
                  {serviceData[1].title}
                </Typography>
                <Typography
                  variant={"body2"}
                  fontWeight={400}
                  color="primary.body1"
                >
                  {serviceData[1].description}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "rgba(245,245,245,1)",
                display: "flex",
                gap: "15px",
                alignItems: "center",
                padding: "20px 15px",
                borderRadius: "10px 10px 90px 10px",
              }}
            >
              {/* img  */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <Image src={serviceData[2].imgSrc} alt="award" width={50} />
              </Box>
              {/* title  */}
              <Box>
                <Typography variant="h6" component={"h6"} fontWeight={600}>
                  {serviceData[2].title}
                </Typography>
                <Typography
                  variant={"body2"}
                  fontWeight={400}
                  color="primary.body1"
                >
                  {serviceData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgba(245,245,245,1)",
                display: "flex",
                gap: "15px",
                alignItems: "center",
                padding: "20px 15px",
                borderRadius: "10px 90px 10px 10px",
                my: 2,
              }}
            >
              {/* img  */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <Image src={serviceData[3].imgSrc} alt="award" width={50} />
              </Box>
              {/* title  */}
              <Box>
                <Typography variant="h6" component={"h6"} fontWeight={600}>
                  {serviceData[3].title}
                </Typography>
                <Typography
                  variant={"body2"}
                  fontWeight={400}
                  color="primary.body1"
                >
                  {serviceData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image src={choseUsImg} alt="choose us" width={400} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
