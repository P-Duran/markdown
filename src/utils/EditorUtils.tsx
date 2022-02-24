import { EditorState, Modifier } from "draft-js";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CodeIcon from "@mui/icons-material/Code";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import LinkIcon from "@mui/icons-material/Link";
import ImageIcon from "@mui/icons-material/Image";
import { EditorAction } from "src/types/EditorTypes";

export const getSelectedText = (editorState: EditorState): string => {
  const selection = editorState.getSelection();
  const currentContent = editorState.getCurrentContent();

  const anchorKey = selection.getAnchorKey();
  const currentBlock = currentContent.getBlockForKey(anchorKey);

  //Then based on the docs for SelectionState -
  const start = selection.getStartOffset();
  const end = selection.getEndOffset();
  return currentBlock.getText().slice(start, end);
};

export const replaceSelectedText = (
  editorState: EditorState,
  replaceFunction: (selectedText: string) => string
) => {
  // create new selection state where focus is at the end
  const nextContentState = Modifier.replaceText(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    replaceFunction(getSelectedText(editorState))
  );
  return EditorState.push(editorState, nextContentState, "insert-characters");
};

export const editorActions: Record<string, EditorAction[]> = {
  fontStyle: [
    {
      label: "italic",
      icon: <FormatItalicIcon fontSize="small" />,
      actions: (editorState) =>
        replaceSelectedText(
          editorState,
          (selectedText) => "*" + selectedText + "*"
        ),
    },
    {
      label: "bold",
      icon: <FormatBoldIcon fontSize="small" />,
      actions: (editorState) =>
        replaceSelectedText(
          editorState,
          (selectedText) => "**" + selectedText + "**"
        ),
    },
    {
      label: "strikethrough",
      icon: <StrikethroughSIcon fontSize="small" />,
      actions: (editorState) =>
        replaceSelectedText(
          editorState,
          (selectedText) => "~~" + selectedText + "~~"
        ),
    },
  ],
  headers: [
    {
      label: "h1",
      icon: <div style={{ fontSize: 14 }}>H1</div>,
      actions: (editorState) =>
        replaceSelectedText(editorState, (selectedText) => "# " + selectedText),
    },
    {
      label: "h2",
      icon: <div style={{ fontSize: 14 }}>H2</div>,
      actions: (editorState) =>
        replaceSelectedText(
          editorState,
          (selectedText) => "## " + selectedText
        ),
    },
    {
      label: "h3",
      icon: <div style={{ fontSize: 14 }}>H3</div>,
      actions: (editorState) =>
        replaceSelectedText(
          editorState,
          (selectedText) => "### " + selectedText
        ),
    },
  ],
  lists: [
    {
      label: "list",
      icon: <FormatListBulletedIcon fontSize="small" />,
      actions: (editorState) =>
        replaceSelectedText(
          editorState,
          (selectedText) => "\n- " + selectedText
        ),
    },
    {
      label: "numbered list",
      icon: <FormatListNumberedIcon fontSize="small" />,
      actions: (editorState) =>
        replaceSelectedText(
          editorState,
          (selectedText) => "\n1. " + selectedText
        ),
    },
    {
      label: "checklist",
      icon: <PlaylistAddCheckIcon fontSize="small" />,
      actions: (editorState) =>
        replaceSelectedText(
          editorState,
          (selectedText) => "\n* [ ]" + selectedText
        ),
    },
  ],
  misc: [
    {
      label: "code",
      icon: <CodeIcon fontSize="small" />,
      actions: (editorState) =>
        replaceSelectedText(
          editorState,
          (selectedText) => "\n```\n\n" + selectedText + "\n\n```"
        ),
    },
    {
      label: "image",
      icon: <ImageIcon fontSize="small" />,
      actions: [
        {
          type: "intput",
          action: (text, editorState) =>
            replaceSelectedText(
              editorState,
              (selectedText) => "![" + selectedText.trim() + "](" + text + ") "
            ),
        },
      ],
    },
    {
      label: "link",
      icon: <LinkIcon fontSize="small" />,
      actions: [
        {
          type: "intput",
          action: (text, editorState) =>
            replaceSelectedText(
              editorState,
              (selectedText) => "[" + selectedText.trim() + "](" + text + ") "
            ),
        },
      ],
    },
  ],
};
