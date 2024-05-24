import { Box, Stack, Typography, styled } from "@mui/material";
const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  padding: "8px 16px",
  width: "45%",
  borderRadius: theme.spacing(1),

  "& p": {
    fontWeight: 600,
  },
}));

const DoctorInformation = ({ data }: any) => {
  return (
    <>
      <Typography variant="h5" color="primary.main" component={"h5"} mb={2}>
        Personal Information
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap={"wrap"}>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Role
          </Typography>
          <Typography>{data?.role}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Name
          </Typography>
          <Typography>{data?.name}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Email
          </Typography>
          <Typography>{data?.email}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Gender
          </Typography>
          <Typography>{data?.gender}</Typography>
        </StyledInformationBox>

        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Status
          </Typography>
          <Typography>{data?.status}</Typography>
        </StyledInformationBox>
      </Stack>

      <Typography variant="h5" color="primary.main" component={"h5"} my={2}>
        Professional Information
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap={"wrap"}>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Designation
          </Typography>
          <Typography>{data?.designation}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Fee
          </Typography>
          <Typography>{data?.appointmentFee}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Qualification
          </Typography>
          <Typography>{data?.qualification}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Average Rating
          </Typography>
          <Typography>{data?.averageRating}</Typography>
        </StyledInformationBox>
      </Stack>
    </>
  );
};

export default DoctorInformation;
