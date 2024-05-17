"use client";

import Modal from "@/components/Shared/Modal/Modal";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import { useGetAllScheduleQuery } from "@/redux/api/scheduleApi";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";
import { toast } from "sonner";
import MultipleSelect from "./MultipleSelect";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const query: Record<string, any> = {};

  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data, isLoading } = useGetAllScheduleQuery(query);
  const [createDoctorSchedule, { isLoading: scheduleLoading }] =
    useCreateDoctorScheduleMutation();

  const schedules = data?.schedules?.data;

  const onSubmit = async () => {
    try {
      const res = await createDoctorSchedule({
        scheduleIds: selectedIds,
      }).unwrap();

      if (res?.count > 0) {
        toast.success("Schedule created successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <Stack direction={"column"} gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={dayjs(selectedDate)}
            onChange={(date) => setSelectedDate(dayjs(date).toISOString())}
            sx={{
              width: "100%",
            }}
          />
        </LocalizationProvider>
        <MultipleSelect
          schedules={schedules}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
        />

        <LoadingButton
          size="small"
          onClick={onSubmit}
          loading={scheduleLoading}
          loadingIndicator="Submitting..."
          variant="contained"
        >
          <span>Submit</span>
        </LoadingButton>
      </Stack>
    </Modal>
  );
};

export default DoctorScheduleModal;
