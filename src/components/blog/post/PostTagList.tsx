import React, { FC } from 'react';
import styled from 'styled-components';

const PostTagsContainer = styled.div`
  margin-bottom: 20px;
  padding: 0 0 0 5px;
  overflow: hidden;
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

export const PostTagList: FC<{ tags: string[]; id: string }> = ({ tags }: { tags: string[] }) => (
  <PostTagsContainer>
    {tags.map((tag, idx) => (
      <PostTag key={idx.toString()}>{tag}</PostTag>
    ))}
  </PostTagsContainer>
);
