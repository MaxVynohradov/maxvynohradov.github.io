import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

export const PostHeaderText = styled.h1`
  position: absolute;
  bottom: 10px;
  left: 5px;
  right: 5px;
  z-index: 1;
  line-height: 40px;
  font-size: 40px;
  font-weight: 700;
`;

const PostTitleLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  :hover {
    color: #632f83;
  }
`;

interface PostTitleProps {
  postLink: string;
  title: string;
}

export const PostTitle: FC<PostTitleProps> = ({ postLink, title }: PostTitleProps) => (
  <PostHeaderText>
    <PostTitleLink to={postLink}>{title}</PostTitleLink>
  </PostHeaderText>
);
