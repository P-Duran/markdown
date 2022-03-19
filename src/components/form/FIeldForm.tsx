import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { InputFieldData, FormData } from "src/types/FIeldFormTypes";
import { LoaderButton } from "../buttons/LoaderButton";
import { FieldInput } from "./FieldInput";

interface Props {
  title: string;
  subtitle?: string;
  fieldsData: InputFieldData[];
  onSubmit?: (formData: FormData) => Promise<any>;
  onChange?: (formData: FormData) => void;
  submitText?: string;
}

export const FieldForm = ({
  fieldsData,
  title,
  subtitle,
  onSubmit = () => Promise.resolve(undefined),
  onChange = () => {},
  submitText = "Submit",
}: Props) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleOnChange = (text: string, fieldData: InputFieldData) => {
    const newFormData = { ...formData, [fieldData.key]: text };
    onChange(newFormData);
    setFormData(newFormData);
  };

  return (
    <Container maxWidth="xs" sx={{ padding: 5 }}>
      <Stack spacing={4}>
        <Stack textAlign="center" spacing={1}>
          <Typography variant="h1">{title}</Typography>
          <Typography>{subtitle}</Typography>
        </Stack>
        {fieldsData.map((data) => (
          <FieldInput
            key={data.key}
            label={data.label}
            type={data.type}
            endAdornment={data.endAdornment}
            onChange={(text) => handleOnChange(text, data)}
          />
        ))}
        <LoaderButton label={submitText} onClick={() => onSubmit(formData)} />
      </Stack>
    </Container>
  );
};
