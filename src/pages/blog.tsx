import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import readingTime from 'reading-time';
import styled from 'styled-components';

import { PostListItem, PostsListItemProps } from '../components/blog/PostListItem';

const PostList = styled.div<{ coverImg: string }>``;

const BlogRoute: FC<PageProps> = (props: PageProps) => {
  const { data } = props;
  const postList = data.allMdx.edges.map(({ node: { slug, frontmatter, body } }) => ({
    slug,
    stats: readingTime(body),
    date: frontmatter.date,
    description: frontmatter.description,
    tags: frontmatter.tags,
    title: frontmatter.title,
    coverImgSrc: frontmatter.coverImg.childImageSharp.fluid.src,
  }));
  console.log('postList', postList);
  return (
    <PostList>
      {postList.map((item: PostsListItemProps) => (
        <PostListItem {...item} />
      ))}
    </PostList>
  );
};

export const query = graphql`
  query MyQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      edges {
        node {
          slug
          body
          frontmatter {
            title
            description
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

export default BlogRoute;
