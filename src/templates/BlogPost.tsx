import { MDXProvider } from '@mdx-js/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from '@reach/router';
import { PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FC } from 'react';

import { FrontmatterData } from '../components/blog/interfaces/FrontmatterData';
import { mdxProviderComponentsList } from '../components/blog/mdxComponents';
import {
  NavLinks,
  PostHeaderImage,
  PostMeta,
  PostSectionContainer,
  PostTagList,
  PostTitle,
  PostTitleWrapper,
} from '../components/blog/post';

interface PageContext {
  slug: string;
  body: string;
  previous: PageContext;
  next: PageContext;
  stats: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  frontmatter: FrontmatterData;
}

const BlogPost: FC<PageProps<unknown, PageContext>> = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: PageProps<unknown, PageContext>,
) => {
  const {
    pageContext: {
      body: mainText,
      previous,
      next,
      stats,
      frontmatter: { tags, date, title, coverImgSrc },
    },
  } = props;
  console.log('previous, next, frontmatterData', previous, next);
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
      <NavLinks
        previous={{ slug: previous?.slug, frontmatter: previous?.frontmatter }}
        next={{ slug: next?.slug, frontmatter: next?.frontmatter }}
      />
    </PostSectionContainer>
  );
};

export default BlogPost;
