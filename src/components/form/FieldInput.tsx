import { FormControl, InputBase, styled } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#f4f4f4",
  borderRadius: 10,
  padding: "0px 10px",
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    borderRadius: 10,
    backgroundColor: theme.palette.mode === "light" ? "#f4f4f4" : "#2b2b2b",
    fontSize: 16,
    padding: "13px 7px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));

interface Props {
  type?: string;
  label?: string;
  endAdornment?: React.ReactNode;
  onChange?: (text: string) => void;
  error?: boolean;
}

export const FieldInput = ({
  type,
  label,
  endAdornment,
  onChange,
  error = false,
}: Props) => {
  return (
    <FormControl variant="standard">
      {/* <InputLabel shrink htmlFor="bootstrap-input">
        {label}
      </InputLabel> */}
      <BootstrapInput
        type={type}
        placeholder={label}
        endAdornment={endAdornment}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={error === undefined || error ? { border: "1px solid red" } : {}}
      />
    </FormControl>
  );
};
