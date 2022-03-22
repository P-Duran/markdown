import React, { lazy, ReactElement, Suspense } from "react";

type Props = {
  componentPath: string;
  componentName: string;
};

export const LazyRoute = (props: Props): ReactElement => {
  const LazyComponent = lazy(() =>
    import(`./${props.componentPath}/${props.componentName}`).then((module) => {
      return {
        default: module[props.componentName],
      };
    })
  );
  return (
    // TODO: Fallback page
    <Suspense fallback={<></>}>
      <LazyComponent />
    </Suspense>
  );
};
