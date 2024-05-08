"use client";

import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtyQuery,
} from "@/redux/api/specialtiesApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import SpecialtyModal from "./components/SpecialistModal";

const SpecialtiesPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtyQuery({});

  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialty(id).unwrap();
      if (res?.id) {
        toast.success("Specialty deleted successfully");
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      align: "center",
      headerAlign:"center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} alt="logo" width={30} height={30} />
          </Box>
        );
      },
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete" onClick={() => handleDelete(row?.id)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Button onClick={() => setIsOpenModal(true)}>Create Specialist</Button>

        <SpecialtyModal open={isOpenModal} setOpen={setIsOpenModal} />

        <TextField placeholder="Search Specialist" size="small" />
      </Stack>

      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} hideFooter={true} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
