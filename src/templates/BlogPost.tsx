import { MDXProvider } from '@mdx-js/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from '@reach/router';
import { PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Gitalk from 'gitalk';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

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
  ShareSocialBlock,
} from '../components/blog/post';
import SEO from '../components/SEO';

interface PageContext {
  siteMetadata: {
    siteUrl: string;
    social: {
      twitterHandle: string;
    };
  };
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

const ShareLinksSection = styled.section`
  padding: 25px 15px;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const CommentsSection = styled.section`
  padding: 0 15px 25px 15px;
`;

const BlogPost: FC<PageProps<unknown, PageContext>> = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: PageProps<unknown, PageContext>,
) => {
  const {
    pageContext: {
      siteMetadata: {
        siteUrl,
        social: { twitterHandle },
      },
      body: mainText,
      slug,
      previous,
      next,
      stats,
      frontmatter: { tags, date, title, coverImgSrc, description, coverImgFixed },
    },
  } = props;

  useEffect(() => {
    const gitalk = new Gitalk({
      clientID: '3b8027c92519ebad96c3',
      clientSecret: '1551425adf40f00f29f3f5646049f5c86b43da14',
      repo: 'maxvynohradov.github.io',
      owner: 'MaxVynohradov',
      admin: ['MaxVynohradov'],
      id: slug,
      title: `Comments on '${title}'`,
      body: `This issue exists to host comments for ${siteUrl}${slug}`,
      distractionFreeMode: false,
    });
    gitalk.render('gitalk');
  }, [title, slug, siteUrl]);

  const { pathname: postLink } = useLocation();
  return (
    <PostSectionContainer id="postBody">
      <SEO title={title} description={description} image={coverImgFixed} pathname={postLink} />
      <header>
        <PostTitleWrapper>
          <PostHeaderImage coverImgSrc={coverImgSrc} id="postImage" />
          <PostTitle postLink={postLink} title={title} id="postTitle" />
        </PostTitleWrapper>
        <PostMeta date={date} timeToRead={stats.text} wordsCount={stats.words} />
        <PostTagList tags={tags} id="postTagsList" />
      </header>
      <main id="postBody">
        <MDXProvider components={mdxProviderComponentsList}>
          <MDXRenderer>{mainText}</MDXRenderer>
        </MDXProvider>
        <NavLinks
          previous={{ slug: previous?.slug, frontmatter: previous?.frontmatter }}
          next={{ slug: next?.slug, frontmatter: next?.frontmatter }}
        />
      </main>
      <footer>
        <ShareLinksSection id="postShareLinks">
          <ShareSocialBlock
            socialConfig={{
              twitterHandle,
              config: {
                url: `${siteUrl}/blog/${slug}`,
                title,
              },
            }}
            tags={tags}
          />
        </ShareLinksSection>
        <CommentsSection>
          <h2>Comments</h2>
          <div id="gitalk" />
        </CommentsSection>
      </footer>
    </PostSectionContainer>
  );
};

export default BlogPost;
