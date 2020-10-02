import { MDXProvider } from '@mdx-js/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from '@reach/router';
import { PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FC } from 'react';

import { mdxProviderComponentsList } from '../components/blog/mdxComponents';
import {
  PostHeaderImage,
  PostMeta,
  PostSectionContainer,
  PostTagList,
  PostTitle,
  PostTitleWrapper,
} from '../components/blog/post';

interface FrontmatterData {
  title: string;
  description: string;
  date: Date;
  coverImgSrc: string;
  tags: string[];
}

interface PageContext {
  body: string;
  stats: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  frontmatterData: FrontmatterData;
}

const BlogPost: FC<PageProps<unknown, PageContext>> = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: PageProps<unknown, PageContext>,
) => {
  const {
    pageContext: {
      body: mainText,
      stats,
      frontmatterData: { tags, date, title, coverImgSrc },
    },
  } = props;
  const { pathname: postLink } = useLocation();
  return (
    <PostSectionContainer>
      <header>
        <PostTitleWrapper>
          <PostHeaderImage coverImgSrc={coverImgSrc} />
          <PostTitle postLink={postLink} title={title} />
        </PostTitleWrapper>
        <PostMeta date={date} timeToRead={stats.text} wordsCount={stats.words} />
        <PostTagList tags={tags} />
      </header>
      <MDXProvider components={mdxProviderComponentsList}>
        <MDXRenderer>{mainText}</MDXRenderer>
      </MDXProvider>
    </PostSectionContainer>
  );
};

export default BlogPost;
