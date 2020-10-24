import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import readingTime from 'reading-time';

import { PostItemProps } from '../components/blog/interfaces/PostItemProps';
import { PostListItem } from '../components/blog/PostListItem';
import SEO from '../components/SEO';

const BlogPostsList: FC<PageProps> = (props: PageProps) => {
  const { data } = props;
  const postList = data.allMdx.edges.map(({ node: { slug, frontmatter, body } }) => ({
    slug,
    stats: readingTime(body, { wordsPerMinute: 360 }),
    date: frontmatter.date,
    description: frontmatter.description,
    originalUrl: frontmatter.originalUrl,
    tags: frontmatter.tags,
    title: frontmatter.title,
    coverImgSrc: frontmatter.coverImg.childImageSharp.fluid.src,
  }));
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const seoImage = data.profileImage.childImageSharp.fixed;
  return (
    <div>
      <Helmet>
        <meta name="google-site-verification" content="3nW_Loo81kowYXSp_stzMufeF24lMB-m9zQCZAwuTiE" />
        <meta name="yandex-verification" content="577ed1e1bb427dd9" />
        <meta name="msvalidate.01" content="FF958DC350391A726E42368F26F6A4B9" />
      </Helmet>
      <SEO
        title="Vynohradov Blog"
        description="Blog about programing, program architecture, JavaScript, Node.js, TypeScript, Serverless and so on"
        image={seoImage}
        pathname="https://maxvynohradov.github.io/me"
      />
      {postList.map((item: PostItemProps, idx: number) => (
        <PostListItem key={idx.toString()} {...item} />
      ))}
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery {
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed {
          height
          width
          src
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      edges {
        node {
          slug
          body
          frontmatter {
            title
            description
            originalUrl
            date
            tags
            coverImg {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogPostsList;
