import { PageProps } from 'gatsby';
import React, { FC } from 'react';

const PostRoute: FC<PageProps> = (props: PageProps) => {
  const { path } = props;
  return (
    <>
      <h1>Post:</h1>
      <p>{path}</p>
    </>
  );
};

export default PostRoute;
