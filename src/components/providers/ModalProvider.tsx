import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { ModalContext, ModalContextProps } from "src/contexts/ModalContext";

interface Props {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [modalProps, setModalProps] = useState<ModalContextProps | undefined>();

  const show = (props: ModalContextProps) => {
    setModalProps(props);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open: show, close: close, isOpen: open }}>
      {children}
      <Dialog open={open} onClose={close}>
        <DialogContent>{modalProps?.components}</DialogContent>
      </Dialog>
    </ModalContext.Provider>
  );
};
