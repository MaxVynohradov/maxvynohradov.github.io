import dayjs from 'dayjs';
import React, { FC } from 'react';
import styled from 'styled-components';

const PostMetaContainer = styled.div`
  display: flex;
  font-size: 17px;
  line-height: 28px;
  color: #7b5a7b;
  font-weight: 600;
  padding-left: 5px;
`;

const PostMetaItem = styled.span`
  display: block;
  width: max-content;
  margin: 0 15px 15px 0;
`;

interface PostMetaProps {
  date: string;
  timeToRead: string;
  wordsCount: number;
}

export const PostMeta: FC<PostMetaProps> = ({ date, timeToRead, wordsCount }: PostMetaProps) => (
  <PostMetaContainer id="postMeta">
    <PostMetaItem id="postDateTime">
      <time dateTime={date}>{dayjs(date).format('DD MMMM YYYY')}</time>
    </PostMetaItem>
    <PostMetaItem>{timeToRead}</PostMetaItem>
    <PostMetaItem>
      {wordsCount}
      &nbsp; words
    </PostMetaItem>
  </PostMetaContainer>
);
