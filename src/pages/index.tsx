import { PageProps } from 'gatsby';
import React, { FC } from 'react';

const IndexRoute: FC<PageProps> = (props: PageProps) => {
  const { path } = props;
  return (
    <>
      <h1>Blog:</h1>
      <p>{path}</p>
      {Array(100)
        .fill(1)
        .map((_, idx) => (
          <p key={idx.toString()}>{idx}</p>
        ))}
    </>
  );
};

export default IndexRoute;
