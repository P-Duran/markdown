import { CompositeDecorator, DraftDecorator } from "draft-js";

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

export const customCompositeDecorator = new CompositeDecorator([
  customDraftDecorator(/^#{1,6} (.+)/g, ({ children }) => (
    <span style={{ color: "red", fontWeight: "bold" }}>{children}</span>
  )),
  customDraftDecorator(/!\[(.*?)\]\((.*?)\)/g, ({ children }) => (
    <span style={{ color: "purple" }}>{children}</span>
  )),
  customDraftDecorator(/\[(.*?)\]\((.*?)\)/g, ({ children }) => (
    <span style={{ color: "blue" }}>{children}</span>
  )),
  customDraftDecorator(/`(.+?)`/g, ({ children }) => (
    <span style={{ backgroundColor: "#e6e6e6" }}>{children}</span>
  )),
  customDraftDecorator(/\*\*(.+?)\*\*/g, ({ children }) => (
    <span style={{ fontWeight: "bold" }}>{children}</span>
  )),
  customDraftDecorator(/\*(.+?)\*/g, ({ children }) => (
    <span style={{ color: "gray" }}>{children}</span>
  )),
  customDraftDecorator(/~~(.+?)~~/g, ({ children }) => (
    <span style={{ color: "orange" }}>{children}</span>
  )),
]);
