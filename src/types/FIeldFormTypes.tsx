export interface InputFieldData {
  key: string;
  label: string;
  render?: "text" | "password" | CustomRender;
  endAdornment?: React.ReactNode;
}

export type CustomRender = (
  handleOnChange: (data: string) => void,
  fieldData?: InputFieldData,
  currentData?: string
) => React.ReactNode;

export type FormData = Record<string, string>;
