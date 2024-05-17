"use client";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const SchedulePage = () => {
  const [openIsModal, setOpenIsModal] = useState(false);
  return (
    <Box>
      <Button
        onClick={() => setOpenIsModal(true)}
        startIcon={<AddCircleOutlineIcon />}
      >
        Create Doctor Schedule
      </Button>
      <DoctorScheduleModal open={openIsModal} setOpen={setOpenIsModal} />
    </Box>
  );
};

export default SchedulePage;
