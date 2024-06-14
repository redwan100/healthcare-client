"use client";

import { useGetAllSpecialtyQuery } from "@/redux/api/specialtiesApi";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRouter } from "next/navigation";
import { useState } from "react";
const ScrollCategory = () => {
  const [value, setValue] = useState<string>("");
  const { data } = useGetAllSpecialtyQuery({});

  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(`/doctors?specialties=${newValue}`);
  };
  return (
    <Box sx={{ maxWidth: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {data?.data?.map((specialty: Record<string, any>) => (
          <Tab
            label={specialty?.title}
            value={specialty?.title}
            key={specialty.id}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default ScrollCategory;
