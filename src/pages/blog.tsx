import { PageProps } from 'gatsby';
import React, { FC } from 'react';

const BlogRoute: FC<PageProps> = (props: PageProps) => {
  const { path } = props;
  return (
    <>
      <h1>Blog:</h1>
      <p>{path}</p>
    </>
  );
};

export default BlogRoute;
