import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Button, Grid } from "@mui/material";
import { MarkdownEditor } from "../../components/editor/MarkdownEditor";
import { MarkdownToolBar } from "../../components/editor/toolbar/MarkdownToolBar";
import { MarkdownRender } from "../../components/render/MarkdownRender";
import { editorActions } from "../../utils/EditorUtils";
import { Editable } from "src/components/editor/Editable";
import { WorkspaceNavigation } from "src/components/editor/workspaceNavigation/workspaceNavigation";
import { pagesPreviewMock } from "src/mocks/pagesPreviewMock";
import { useNavbar } from "src/contexts/NavbarContext";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { useTranslation } from "react-i18next";
import { MarkdownForm } from "src/components/editor/markdownForm/MarkdownForm";

export const Editor = (): ReactElement => {
  const [t] = useTranslation();
  const { setComponent } = useNavbar();
  const [text, setText] = useState("");
  const [visibleForm, setVisibleForm] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setComponent(
      <Button
        variant="outlined"
        startIcon={<SaveRoundedIcon />}
        onClick={() => setVisibleForm(true)}
      >
        {t("action.save")}
      </Button>
    );

    return () => setComponent(undefined);
  }, [setComponent, t]);

  return (
    <Grid
      container
      spacing={2}
      ref={containerRef}
      sx={{ position: "relative" }}
    >
      <WorkspaceNavigation
        containerRef={containerRef}
        pages={pagesPreviewMock}
      />
      <Grid item sm={6}>
        <MarkdownEditor>
          <MarkdownToolBar editorActions={editorActions} />
          <Editable
            onChange={(state) => {
              setText(state.getCurrentContent().getPlainText());
            }}
          />
        </MarkdownEditor>
      </Grid>
      <Grid item sm={6}>
        <MarkdownRender value={text} />
      </Grid>
      <MarkdownForm visible={visibleForm} setVisible={setVisibleForm} />
    </Grid>
  );
};
