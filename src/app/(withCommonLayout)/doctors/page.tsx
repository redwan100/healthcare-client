import DashedLine from "@/components/UI/HomePage/Doctor/DashedLine";
import DoctorCard from "@/components/UI/HomePage/Doctor/DoctorCard";
import ScrollCategory from "@/components/UI/HomePage/Doctor/ScrollCategory";
import { Box, Container } from "@mui/material";

type PropTypes = {
  searchParams: { specialties: string };
};

const Doctors = async ({ searchParams }: PropTypes) => {
  let res;
  if (searchParams?.specialties) {
    res = await fetch(
      `http://localhost:5000/api/v1/doctor?specialties=${searchParams.specialties}`
    );
  } else {
    res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  }

  const { data } = await res.json();

  return (
    <Container>
      {/* // TODO: dashed line  */}
      <DashedLine />
      {/* // TODO: dashed line  */}
      <Box
        sx={{
          mt: 2,
          p: 3,
          bgcolor: "secondary.50",
        }}
      >
        {/* // TODO: scroll category  */}
        <ScrollCategory />
        {/* // TODO: scroll category  */}

        {data?.data?.map((doctor: any, index: number) => (
          <Box key={doctor?.id}>
            <DoctorCard doctor={doctor} />

            {index === data?.data?.length - 1 ? null : <DashedLine />}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Doctors;
