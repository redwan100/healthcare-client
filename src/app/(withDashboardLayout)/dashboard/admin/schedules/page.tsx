"use client";

import {
  useDeleteScheduleMutation,
  useGetAllScheduleQuery,
} from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormtter";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ScheduleModal from "./components/ScheduleModal";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllScheduleQuery({});
  const [deleteSchedule] = useDeleteScheduleMutation();

  const schedules = data?.schedules?.data;
  const meta = data?.schedules?.meta;

  const deletedSchedule = async (id: string) => {
    const res = await deleteSchedule(id);

    if (res?.data?.id) {
      toast.success("Schedule deleted successfully");
    }
  };

  useEffect(() => {
    const updateData = schedules?.map((schedule: any) => {
      return {
        id: schedule?.id,
        startDate: dateFormatter(schedule?.createdAt),
        endDate: dateFormatter(schedule?.updatedAt),
        startTime: dayjs(schedule?.startTime).format("hh:mm a"),
        endTime: dayjs(schedule?.endTime).format("hh:mm a"),
      };
    });

    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 1,
    },
    {
      field: "endDate",
      headerName: "End Date",
      flex: 1,
    },
    {
      field: "startTime",
      headerName: "Start Time",
      flex: 1,
    },
    {
      field: "endTime",
      headerName: "End Time",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              aria-label="delete"
              onClick={() => deletedSchedule(row?.id)}
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>

      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={allSchedule ?? []} columns={columns} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default SchedulesPage;
