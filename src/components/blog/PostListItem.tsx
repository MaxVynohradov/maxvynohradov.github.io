import dayjs from 'dayjs';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

export interface PostsListItemProps {
  slug: string;
  title: string;
  description: string;
  date: Date;
  tags: string[];
  coverImgSrc: string;
  stats: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

const PostListItemContainer = styled.section`
  margin: 80px 0;
  @media (max-width: 960px) {
    margin: 25px 0 40px 0;
  }
`;

const PostTitle = styled.h1`
  position: absolute;
  bottom: 0;
  left: 5px;
  right: 5px;
  z-index: 1;
  line-height: 40px;
  font-size: 40px;
  font-weight: 700;
`;

const PostTagsContainer = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
  padding: 0;
  font-size: 12px;
`;

const PostTag = styled.div`
  background: #ab74cd;
  border-radius: 3px 0 0 3px;
  color: #fff !important;
  display: inline-block !important;
  height: 26px;
  float: left;
  line-height: 26px;
  padding: 0 30px 0 10px;
  position: relative;
  margin: 0 7px 3px 0;
  text-decoration: none;
  cursor: default;
  -webkit-transition: color 0.2s;
  ::before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: '';
    height: 6px;
    right: 13px;
    position: absolute;
    width: 6px;
    top: 10px;
  }
  ::after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #ab74cd;
    border-top: 13px solid transparent;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
  }
  :hover {
    background-color: #77389d;
    color: white;
  }
  :hover::after {
    border-left-color: #77389d;
  }
`;

const PostMeta = styled.div`
  display: flex;
  font-size: 17px;
  line-height: 28px;
  color: #7b5a7b;
  font-weight: 700;
`;

const PostMetaItem = styled.span`
  display: block;
  width: max-content;
  margin: 0 15px 15px 0;
`;

const PostTitleLink = styled(Link)`
  color: #000000;
  text-underline-position: under;
  :hover {
    color: #632f83;
  }
`;

const PostDescription = styled.main`
  line-height: 28px;
  font-size: 20px;
`;

const ContinueToReadButton = styled(Link)`
  line-height: 28px;
  font-size: 20px;
`;

const PostTitleWrapper = styled.div`
  position: relative;
  height: 300px;
  margin-bottom: 20px;
`;

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

export const PostListItem: FC<PostsListItemProps> = (props: PostsListItemProps) => {
  const { slug, title, description, date, tags, coverImgSrc, stats } = props;

  return (
    <PostListItemContainer>
      <header>
        <PostTitleWrapper>
          <PostImage width="100%" src={coverImgSrc} />
          <PostImageMask />
          <PostTitle>
            <PostTitleLink to={slug}>{title}</PostTitleLink>
          </PostTitle>
        </PostTitleWrapper>
        <PostMeta>
          <PostMetaItem>{dayjs(date).format('DD MMMM YYYY')}</PostMetaItem>
          <PostMetaItem>{stats.text}</PostMetaItem>
          <PostMetaItem>
            {stats.words}
            &nbsp; words
          </PostMetaItem>
        </PostMeta>
        <PostTagsContainer>
          {tags.map(tag => (
            <PostTag>{tag}</PostTag>
          ))}
        </PostTagsContainer>
      </header>
      <PostDescription>{description}</PostDescription>
      {/* <ContinueToReadButton to={slug}>Continue to read</ContinueToReadButton> */}
    </PostListItemContainer>
  );
};
