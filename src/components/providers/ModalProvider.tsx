import { Dialog, DialogContent } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { ModalContext, ModalContextProps } from "src/contexts/ModalContext";

interface Props {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [modalProps, setModalProps] = useState<ModalContextProps | undefined>();

  const show = useCallback((props: ModalContextProps) => {
    setModalProps(props);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const modalContext = useMemo(() => {
    return { open: show, close: close, isOpen: open };
  }, [show, close, open]);

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
      <Dialog
        open={open}
        onClose={close}
        PaperProps={{
          style: { borderRadius: 25 },
        }}
      >
        <DialogContent sx={{ p: 5 }}>{modalProps?.components}</DialogContent>
      </Dialog>
    </ModalContext.Provider>
  );
};
