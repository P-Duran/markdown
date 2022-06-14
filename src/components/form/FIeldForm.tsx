import { Container, Stack, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import {
  InputFieldData,
  FormData,
  CustomRender,
} from "src/types/FIeldFormTypes";
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
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = useCallback(
    (text: string, fieldData: InputFieldData) => {
      setFormData((prevState) => {
        const newFormData = { ...prevState, [fieldData.key]: text };
        onChange(newFormData);
        return newFormData;
      });
    },
    [onChange]
  );

  const handleOnSubmitWithDelay = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => onSubmit(formData).then(() => setIsLoading(false)), 500);
  }, [formData, onSubmit]);

  const defaultRender = useCallback(
    (data: InputFieldData, i: number) => {
      return (
        <FieldInput
          key={data.key}
          label={data.label}
          type={data.render?.toString()}
          endAdornment={data.endAdornment}
          autoFocus={i === 0}
          onChange={(text) => handleOnChange(text, data)}
          onKeyDown={(code) => code === "Enter" && handleOnSubmitWithDelay()}
        />
      );
    },
    [handleOnChange, handleOnSubmitWithDelay]
  );

  const customRender = useCallback(
    (render: CustomRender, data: InputFieldData) => {
      return (
        <React.Fragment key={data.key}>
          {render(
            (text: string) => handleOnChange(text, data),
            data,
            formData[data.key]
          )}
        </React.Fragment>
      );
    },
    [formData, handleOnChange]
  );

  return (
    <Container maxWidth="xs" sx={{ padding: 5 }}>
      <Stack spacing={4}>
        <Stack textAlign="center" spacing={1}>
          <Typography variant="h1">{title}</Typography>
          <Typography>{subtitle}</Typography>
        </Stack>
        {fieldsData.map((data, i) =>
          data.render && !(typeof data.render === "string")
            ? customRender(data.render, data)
            : defaultRender(data, i)
        )}
        <LoaderButton loading={isLoading} onClick={() => onSubmit(formData)}>
          <Typography sx={{ color: "white" }} children={submitText} />
        </LoaderButton>
      </Stack>
    </Container>
  );
};
