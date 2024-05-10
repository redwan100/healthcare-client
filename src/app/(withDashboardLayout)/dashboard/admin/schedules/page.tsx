"use client";

import { Box, Button } from "@mui/material";
import { useState } from "react";
import ScheduleModal from "./components/ScheduleModal";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>

      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

      <Box my={2}>Display Schedule</Box>
    </Box>
  );
};

export default SchedulesPage;
