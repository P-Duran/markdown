import { Drawer } from "@mui/material";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { FieldForm } from "src/components/form/FIeldForm";

type Props = {
  visible: boolean;
  setVisible: (val: boolean) => void;
};

export const MarkdownForm = ({ visible, setVisible }: Props): ReactElement => {
  const [t] = useTranslation();

  return (
    <Drawer
      anchor="right"
      open={visible}
      onClose={() => setVisible(false)}
      variant="temporary"
      PaperProps={{ sx: { width: "500px" } }}
    >
      <FieldForm
        title={t("markdown.save.title")}
        subtitle={t("markdown.save.description")}
        submitText={t("action.save")}
        onSubmit={() => Promise.resolve()}
        fieldsData={[
          { key: "title", label: "Título" },
          {
            key: "description",
            label: "Descripción",
            type: "text",
          },
        ]}
      />
    </Drawer>
  );
};
