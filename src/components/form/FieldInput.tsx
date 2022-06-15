import { FormControl, InputBase, styled } from "@mui/material";
import { useEffect, useState } from "react";

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
  startAdornment?: React.ReactNode;
  onChange?: (text: string) => void;
  onKeyDown?: (code: string) => void;
  error?: boolean;
  autoFocus?: boolean;
  onChangeDelay?: number;
}

export const FieldInput = ({
  autoFocus = false,
  type,
  label,
  endAdornment,
  startAdornment,
  onChange,
  onKeyDown = () => {},
  error = false,
  onChangeDelay = 0,
}: Props) => {
  const [currentText, setCurrentText] = useState<string>("");

  useEffect(() => {
    const timeOutId = setTimeout(
      () => onChange && onChange(currentText),
      onChangeDelay
    );
    return () => clearTimeout(timeOutId);
  }, [currentText, onChange, onChangeDelay]);

  useEffect(() => {}, []);

  return (
    <FormControl variant="standard">
      <BootstrapInput
        type={type}
        placeholder={label}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        autoFocus={autoFocus}
        onChange={(e) => setCurrentText(e.target.value)}
        style={error === undefined || error ? { border: "1px solid red" } : {}}
        onKeyDown={(e) => onKeyDown(e.code)}
      />
    </FormControl>
  );
};
