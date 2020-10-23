import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.main`
  line-height: 28px;
  font-size: 21px;
  padding: 0 5px;
  font-weight: 400;
`;

const OriginalOnBlock = styled.p`
  font-style: italic;
  font-size: 16px;
  padding: 5px 0 0 0;
  font-weight: 400;
`;

const ContinueToReadLink = styled(Link)`
  text-decoration: none;
  line-height: 28px;
  font-size: 21px;
  color: #632f83;
  :visited {
    color: #632f83;
  }
`;

interface PostDescriptionProps {
  description: string;
  postLink: string;
  // eslint-disable-next-line react/require-default-props
  originalUrl?: string;
}

export const PostDescription: FC<PostDescriptionProps> = ({
  description,
  postLink,
  originalUrl,
}: PostDescriptionProps) => (
  <DescriptionContainer>
    {description}
    &nbsp;
    <ContinueToReadLink to={postLink}>Read more...</ContinueToReadLink>
    {originalUrl && (
      <OriginalOnBlock>
        Original on&nbsp;
        <a href={originalUrl}>{originalUrl}</a>
      </OriginalOnBlock>
    )}
  </DescriptionContainer>
);
