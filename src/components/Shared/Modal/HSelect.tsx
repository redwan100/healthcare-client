import { SxProps, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Controller, useFormContext } from "react-hook-form";

type TTextField = {
  name: string;
  size?: "small" | "medium";
  label?: string;
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: string[];
};

export default function HSelect({
  items,
  name,
  size,
  label,
  placeholder,
  required,
  fullWidth,
  sx,
}: TTextField) {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{
            ...sx,
          }}
          size={size}
          select
          label={label}
          required={required}
          fullWidth={fullWidth}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
        >
          {items.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}
