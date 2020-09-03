import { PageProps } from 'gatsby';
import React, { FC } from 'react';

const IndexRoute: FC<PageProps> = (props: PageProps) => {
  const { path } = props;
  return (
    <>
      <h1>About:</h1>
      <p>{path}</p>
    </>
  );
};

export default IndexRoute;
