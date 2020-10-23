import React, { FC } from 'react';
import styled from 'styled-components';

const PostImageMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;
  background: none;
  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 80%);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 80%);
`;

const PostImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface PostHeaderImageProps {
  coverImgSrc: string;
}

export const PostHeaderImage: FC<PostHeaderImageProps> = ({ coverImgSrc }: PostHeaderImageProps) => (
  <>
    <PostImage width="100%" src={coverImgSrc} />
    <PostImageMask />
  </>
);
