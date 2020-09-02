import { PageProps } from 'gatsby';
import React, { FC } from 'react';

import Toggle from '../components/Toggler';

const IndexRoute: FC<PageProps> = (props: PageProps) => {
  const { path } = props;
  return (
    <>
      <Toggle />
      <h1>Path:</h1>
      <p>{path}</p>
    </>
  );
};

export default IndexRoute;
