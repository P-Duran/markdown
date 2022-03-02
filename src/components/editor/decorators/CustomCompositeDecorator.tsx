import { CompositeDecorator, DraftDecorator } from "draft-js";
import { CustomDecorator } from "src/types/EditorTypes";

export const customCompositeDecorator = (decorators: CustomDecorator[]) =>
  new CompositeDecorator(
    decorators.map((decorator) =>
      customDraftDecorator(decorator.regex, ({ children }) => (
        <span style={decorator.style}>{children}</span>
      ))
    )
  );

export const defaultDecorators: CustomDecorator[] = [
  { regex: /^#{1,6} (.+)/g, style: { color: "#e4574b", fontWeight: "bold" } }, //Headers
  { regex: /!\[(.*?)\]\((.*?)\)/g, style: { color: "#5da85c" } }, //image
  { regex: /\[(.*?)\]\((.*?)\)/g, style: { color: "#257cd3" } }, //link
  {
    regex: /`(.+?)`/g,
    style: { backgroundColor: "#e6e6e6", color: "#4d4d4d" },
  }, //inline code
  { regex: /\*\*(.*?)\*\*/g, style: { fontWeight: "bold" } }, //bold
  { regex: /\*(.*?)\*/g, style: { fontStyle: "italic", color: "#a0a1a7" } }, //italic
  {
    regex: /~~(.*?)~~/g,
    style: { color: "#986801", textDecoration: "line-through" },
  }, //strightlight
];

//HELPERS
export const regexStrategy = (
  regex: RegExp,
  block: Draft.ContentBlock,
  callback: (start: number, end: number) => void
) => {
  const text = block.getText();
  let result: RegExpExecArray;
  while ((result = regex.exec(text) as RegExpExecArray) != null) {
    let start = result.index;
    let end = start + result[0].length;
    callback(start, end);
  }
};

interface Props {
  children: React.ReactNode;
}

const customDraftDecorator = (
  regex: RegExp,
  component: ({ children }: Props) => React.ReactNode
): DraftDecorator => {
  return {
    strategy: (block, callback) => regexStrategy(regex, block, callback),
    component: component,
  };
};
