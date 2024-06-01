"use client";

import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { dateFormatter } from "@/utils/dateFormtter";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Pagination } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const SchedulePage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [openIsModal, setOpenIsModal] = useState(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);

  let query: Record<string, any> = {};
  query["page"] = page;
  query["limit"] = limit;

  const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });

  const schedules = data?.doctorSchedules;
  const meta = data?.meta;
  let pageCount: number | any;
  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit);
  }

  useEffect(() => {
    const updateData = schedules?.map((schedule: any) => {
      return {
        id: schedule?.scheduleId,
        startDate: dateFormatter(schedule?.schedule?.startDateTime),
        startTime: dayjs(schedule?.schedule?.startDateTime).format("hh:mm a"),
        endTime: dayjs(schedule?.schedule?.endDateTime).format("hh:mm a"),
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
              // TODO: implement later
              // onClick={() => deleteSchedule(row?.id)}
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      <Button
        onClick={() => setOpenIsModal(true)}
        startIcon={<AddCircleOutlineIcon />}
      >
        Create Doctor Schedule
      </Button>
      <DoctorScheduleModal open={openIsModal} setOpen={setOpenIsModal} />

      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={allSchedule ?? []}
            columns={columns}
            hideFooterPagination
            slots={{
              footer: () => (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Pagination
                    count={pageCount as number}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                  />
                </Box>
              ),
            }}
          />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default SchedulePage;
