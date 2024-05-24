"use client";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import {
  useGetSingleUserQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/userApi";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { useState } from "react";
import DoctorInformation from "./components/DoctorInformation";
import ProfileUpdateModal from "./components/ProfileUpdateModal";

const DoctorProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetSingleUserQuery({});
  const [updateMYProfile, { isLoading: updating }] =
    useUpdateMyProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    updateMYProfile(formData);
  };
  return (
    <>
      <ProfileUpdateModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
      />
      <Container>
        {!isLoading ? (
          <Grid container spacing={2}>
            <Grid xs={12} md={4}>
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <Image
                  width={400}
                  height={300}
                  alt="user photo"
                  src={data?.profilePhoto}
                />
              </Box>
              <Box my={3}>
                {updating ? (
                  <p>Uploading...</p>
                ) : (
                  <AutoFileUploader
                    name="file"
                    label="Choose Your Profile Photo"
                    icon={<CloudUploadIcon />}
                    onFileUpload={fileUploadHandler}
                    variant="text"
                  />
                )}
              </Box>

              <Button
                fullWidth
                endIcon={<ModeEditIcon />}
                onClick={() => setIsModalOpen(true)}
              >
                Edit Profile
              </Button>
            </Grid>
            <Grid xs={12} md={8}>
              <DoctorInformation data={data} />
            </Grid>
          </Grid>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </>
  );
};

export default DoctorProfilePage;
