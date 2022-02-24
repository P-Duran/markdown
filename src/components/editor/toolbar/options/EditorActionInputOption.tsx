import SendIcon from "@mui/icons-material/Send";
import { Container, IconButton, Input } from "@mui/material";
import { useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
}
export const EditorActionInputOption = ({ onSubmit }: Props) => {
  const [text, setText] = useState("");
  return (
    <Container>
      <Input
        placeholder="paste url here"
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton onClick={() => onSubmit(text)}>
        <SendIcon fontSize="small" />
      </IconButton>
    </Container>
  );
};
