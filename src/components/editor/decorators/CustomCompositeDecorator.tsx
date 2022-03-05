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
