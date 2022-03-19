export interface InputFieldData {
  key: string;
  label: string;
  type?: string;
  endAdornment?: React.ReactNode;
}

export type FormData = Record<string, string>;
