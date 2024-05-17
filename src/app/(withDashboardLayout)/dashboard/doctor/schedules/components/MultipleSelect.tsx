import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function getTimeIn12HourFormat(dateTimeString: string): string {
  const date: Date = new Date(dateTimeString);
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const ampm: string = hours >= 12 ? "PM" : "AM";
  const formattedHours: number = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes: string =
    minutes < 10 ? "0" + minutes : minutes.toString();
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

export default function MultipleSelect({
  schedules,
  selectedIds,
  setSelectedIds,
}: any) {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof selectedIds>) => {
    const {
      target: { value },
    } = event;
    setSelectedIds(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedIds}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value: any) => {
                const selectedSchedule = schedules.find(
                  (schedule: any) => schedule.id === value
                );

                if (!selectedSchedule) return null;
                const formattedTimeSlot = `${getTimeIn12HourFormat(
                  selectedSchedule?.startDateTime
                )} - ${getTimeIn12HourFormat(selectedSchedule?.endDateTime)}`;
                return <Chip key={value} label={formattedTimeSlot} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {schedules?.map((schedule: any) => (
            <MenuItem
              key={schedule?.id}
              value={schedule?.id}
              style={getStyles(schedule, selectedIds, theme)}
            >
              {`${getTimeIn12HourFormat(
                schedule?.startDateTime
              )} - ${getTimeIn12HourFormat(schedule?.endDateTime)}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
