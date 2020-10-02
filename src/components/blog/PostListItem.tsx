// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from '@reach/router';
import React, { FC } from 'react';

import { PostItemProps } from './interfaces/PostItemProps';
import {
  PostDescription,
  PostHeaderImage,
  PostMeta,
  PostSectionContainer,
  PostTagList,
  PostTitle,
  PostTitleWrapper,
} from './post';

export const PostListItem: FC<PostItemProps> = (props: PostItemProps) => {
  const { slug, title, description, date, tags, coverImgSrc, stats } = props;
  const { pathname } = useLocation();
  const postLink = pathname === '/' ? `blog/${slug}` : slug;
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
      <PostDescription description={description} postLink={postLink} />
    </PostSectionContainer>
  );
};
